"use client"

import React, { useEffect } from 'react'
import * as THREE from "three"
import { OrbitControls, GLTFLoader, DRACOLoader } from 'three/examples/jsm/Addons.js'

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

                const arr = [...gltf.scene.children]
                console.log(arr)
                for (const mesh of arr) {
                    mesh.castShadow = true
                    mesh.scale.set(0.55, 0.55, 0.55)
                    mesh.rotation.set(-Math.PI * 0.2, 0, 0)
                    mesh.position.set(0, 0, -15)
                    scene.add(mesh)
                }
                scene.add(gltf.scene)

            }
        )

        //camera
        const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 1000)
        camera.position.set(-0.13, -50, 30)
        scene.add(camera)

        // const directionalLight = new THREE.DirectionalLight(parameters.lightColor, 3)
        // directionalLight.position.set(4.41, 2.14, 4.09)
        // scene.add(directionalLight)

        //controls
        const control = new OrbitControls(camera, canvas)
        control.enableDamping = true

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

            //update controls
            control.update()
            renderer.render(scene, camera)
            window.requestAnimationFrame(tick)
        }
        tick()

    }, [])

    return (
        <canvas className="webgl relative z-50"></canvas>
    )
}

export default Model