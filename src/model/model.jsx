"use client"

import React, { useEffect, useState } from 'react'
import * as THREE from "three"
import { GLTFLoader, DRACOLoader } from 'three/examples/jsm/Addons.js'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useMobile from '@/hooks/use-mobile'
gsap.registerPlugin(ScrollTrigger)

const Model = () => {

    const [arrPositionModel, setarrPositionModel] = useState(null)
    const [bee, setbee] = useState(null)

    let ismobile = null;
    ismobile = useMobile()

    useEffect(() => {

        if (ismobile !== null) {


            const canvas = document.querySelector("canvas")

            // Sizes
            const sizes = {
                width: window.innerWidth,
                height: window.innerHeight
            }

            // Scene
            const scene = new THREE.Scene()

            // GLTF loader
            const dracoLoader = new DRACOLoader()
            dracoLoader.setDecoderPath('/node_modules/three/examples/jsm/libs/draco/')
            const gltfLoader = new GLTFLoader()
            gltfLoader.setDRACOLoader(dracoLoader)
            let mixer = null
            let beeModel = null

            gltfLoader.load(
                "/stylized_flying_bee_bird_rigged/scene.gltf",
                (gltf) => {
                    mixer = new THREE.AnimationMixer(gltf.scene)
                    const action1 = mixer.clipAction(gltf.animations[0])
                    action1.play()

                    beeModel = gltf.scene
                    beeModel.scale.set(ismobile ? 0.01 : 0.025, ismobile ? 0.01 : 0.025, ismobile ? 0.01 : 0.025)
                    const arr = [...beeModel.children]
                    // for(const mesh of arr){
                    //     console.log(mesh)
                    //     mesh.scale.set(0.55, 0.55, 0.55)
                    // }
                    scene.add(beeModel)

                    setbee(beeModel)
                }
            )

            // Camera
            const camera = new THREE.PerspectiveCamera(10, sizes.width / sizes.height, 0.1, 1000)
            camera.position.set(0, 0, 10)
            camera.lookAt(new THREE.Vector3(0, 0, 0))
            scene.add(camera)

            const distance = 10;
            const frustumHeight = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * distance; // Vertical size of the camera's frustum at the given distance
            const frustumWidth = frustumHeight * camera.aspect; // Horizontal size based on the aspect ratio
            const halfFrustumWidth = frustumWidth / 2; // Half the width of the frustum at this distance
            const objectPositionX = halfFrustumWidth

            let positionArr = [
                {
                    id: 'hero',
                    position: { x: 0, y: -0.2, z: 0 },
                    rotation: { x: 0, y: 1.5, z: 0 }
                },
                {
                    id: "about",
                    position: { x: Math.min(objectPositionX , 3), y: -0.3, z: -5 },
                    rotation: { x: 0.5, y: -0.5, z: 0 },
                },
                {
                    id: "skills",
                    position: { x: -Math.min(objectPositionX , 3), y: -0.4, z: -5 },
                    rotation: { x: 0, y: 0.5, z: 0 },
                },
                {
                    id: "projects",
                    position: { x: Math.min(objectPositionX-0.2 , 3), y: -0.5, z: 0 },
                    rotation: { x: 0.3, y: -0.5, z: 0 },
                },
                {
                    id: "contact",
                    position: { x: -Math.min(objectPositionX,3), y: -0.6, z: -5 },
                    rotation: { x: 0, y: 0.5, z: 0 },
                },
            ];

            setarrPositionModel(positionArr)

            // Renderer
            const renderer = new THREE.WebGLRenderer({
                canvas,
                alpha: true
            })
            renderer.shadowMap.enabled = true
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

            // Resize handler
            window.addEventListener('resize', () => {
                sizes.width = window.innerWidth
                sizes.height = window.innerHeight

                camera.aspect = sizes.width / sizes.height
                camera.updateProjectionMatrix()

                renderer.setSize(sizes.width, sizes.height)
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            })

            // Animation loop
            const clock = new THREE.Clock()
            let previousTime = 0
            const tick = () => {
                const elapsTime = clock.getElapsedTime()
                const dt = elapsTime - previousTime
                previousTime = elapsTime

                if (mixer) {
                    mixer.update(dt)
                }

                renderer.render(scene, camera)
                window.requestAnimationFrame(tick)
            }
            tick()
        }
    }, [ismobile])

    const modelMove = () => {
        const sections = document.querySelectorAll('.section');
        let currentSection;
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2) {
                currentSection = section.id;
            }
        });
        let position_active = arrPositionModel.findIndex(
            (val) => val.id == currentSection
        );
        if (position_active >= 0) {
            let new_coordinates = arrPositionModel[position_active];
            gsap.to(bee.position, {
                x: new_coordinates.position.x,
                y: new_coordinates.position.y,
                z: new_coordinates.position.z,
                duration: 3,
                ease: "power1.out"
            });
            gsap.to(bee.rotation, {
                x: new_coordinates.rotation.x,
                y: new_coordinates.rotation.y,
                z: new_coordinates.rotation.z,
                duration: 3,
                ease: "power1.out"
            })
        }
    }

    useEffect(() => {
        if (bee && arrPositionModel) {
            modelMove();
            window.addEventListener('scroll', () => {
                if (bee) {
                    modelMove();
                }
            })
        }
    }, [bee, arrPositionModel])

    console.log(ismobile)

    return (
        <canvas className="webgl fixed top-0 left-0 z-0"></canvas>
    )
}

export default Model