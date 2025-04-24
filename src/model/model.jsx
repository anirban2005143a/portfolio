"use client"

import React, { useEffect } from 'react'
import * as THREE from "three"
import { GLTFLoader, DRACOLoader } from 'three/examples/jsm/Addons.js'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Model = () => {

    useEffect(() => {

        console.log(GLTFLoader)

        const canvas = document.querySelector("canvas")

        //sizes
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        //parameter
        const parameters = {}
        parameters.lightColor = 0xffffff

        //scene
        const scene = new THREE.Scene()


        //gltf loader
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/node_modules/three/examples/jsm/libs/draco/')
        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)
        let mixer = null
        let beeModel = null
        gltfLoader.load(
            "/stylized_flying_bee_bird_rigged/scene.gltf",
            (gltf) => {
                console.log(gltf)

                //mixer animation
                mixer = new THREE.AnimationMixer(gltf.scene)
                const action1 = mixer.clipAction(gltf.animations[0])

                action1.play()

                // gltf.scene.scale.set(0.025, 0.025, 0.025)
                // gltf.scene.rotation.set(Math.PI * 0.5, Math.PI * 0.25, 0)

                // const arr = [...gltf.scene.children]

                // for (const mesh of arr) {
                //     mesh.castShadow = true
                //     mesh.scale.set(0.55, 0.55, 0.55)
                //     mesh.rotation.set(-Math.PI * 0.2, 0, 0)
                //     mesh.position.set(0, 0, -15)
                //     scene.add(mesh)
                // }

                beeModel = gltf.scene
                beeModel.scale.set(0.055, 0.055, 0.055)
                beeModel.rotation.set(-Math.PI * 0.2, 0, 0)
                beeModel.position.set(0, 0, 0)
                scene.add(beeModel)

                console.log(beeModel)

                // GSAP scroll-based animation
                gsap.to(beeModel.position, {
                    x: 10, // zig-zag movement, you can play with this
                    y: -5, // downward scroll
                    scrollTrigger: {
                        trigger: document.body,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: true
                    },
                    onUpdate: () => {
                        // optional: update other props like rotation
                        beeModel.rotation.y += 0.1
                    }
                })

                // Optional: create a timeline for zig-zag path
                gsap.to(beeModel.position, {
                    x: -10,
                    scrollTrigger: {
                        trigger: document.body,
                        start: "top+=500 top",
                        end: "bottom bottom",
                        scrub: true
                    },
                    ease: "power1.inOut",
                    repeat: -1,
                    yoyo: true,
                })

            }
        )

        //camera
        const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 1000)
        camera.position.set(0,0,10)
        camera.lookAt(new THREE.Vector3(0, 0, 0))
        scene.add(camera)

        // const directionalLight = new THREE.DirectionalLight(parameters.lightColor, 3)
        // directionalLight.position.set(4.41, 2.14, 4.09)
        // scene.add(directionalLight)


        //renderer
        const renderer = new THREE.WebGLRenderer({
            canvas
        })
        renderer.shadowMap.enabled = true
        renderer.setSize(sizes.width, sizes.height)

        //resize
        window.addEventListener('resize', () => {
            sizes.width = window.innerWidth,
                sizes.height = window.innerHeight
            //update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()
            //update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })

        const clock = new THREE.Clock
        let previousTime = 0
        const tick = () => {
            const elapsTime = clock.getElapsedTime()
            const dt = elapsTime - previousTime
            previousTime = elapsTime

            //update mixer
            if (mixer) {
                mixer.update(dt)
            }

            //update renderer
            renderer.render(scene, camera)
            window.requestAnimationFrame(tick)
        }
        tick()

        console.log()
    }, [])


    

    return (
        <canvas className="webgl fixed top-0 left-0 z-0 "></canvas>
    )
}

export default Model