// "use client"

// import React, { useEffect } from 'react'
// import * as THREE from "three"
// import { GLTFLoader, DRACOLoader } from 'three/examples/jsm/Addons.js'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger)

// const Model = () => {

//     useEffect(() => {

//         console.log(GLTFLoader)

//         const canvas = document.querySelector("canvas")

//         //sizes
//         const sizes = {
//             width: window.innerWidth,
//             height: window.innerHeight
//         }

//         //parameter
//         const parameters = {}
//         parameters.lightColor = 0xffffff

//         //scene
//         const scene = new THREE.Scene()


//         //gltf loader
//         const dracoLoader = new DRACOLoader()
//         dracoLoader.setDecoderPath('/node_modules/three/examples/jsm/libs/draco/')
//         const gltfLoader = new GLTFLoader()
//         gltfLoader.setDRACOLoader(dracoLoader)
//         let mixer = null
//         let beeModel = null
//         gltfLoader.load(
//             "/stylized_flying_bee_bird_rigged/scene.gltf",
//             (gltf) => {
//                 console.log(gltf)

//                 //mixer animation
//                 mixer = new THREE.AnimationMixer(gltf.scene)
//                 const action1 = mixer.clipAction(gltf.animations[0])

//                 action1.play()

//                 // gltf.scene.scale.set(0.025, 0.025, 0.025)
//                 // gltf.scene.rotation.set(Math.PI * 0.5, Math.PI * 0.25, 0)

//                 // const arr = [...gltf.scene.children]

//                 // for (const mesh of arr) {
//                 //     mesh.castShadow = true
//                 //     mesh.scale.set(0.55, 0.55, 0.55)
//                 //     mesh.rotation.set(-Math.PI * 0.2, 0, 0)
//                 //     mesh.position.set(0, 0, -15)
//                 //     scene.add(mesh)
//                 // }

//                 beeModel = gltf.scene
//                 beeModel.scale.set(0.055, 0.055, 0.055)
//                 beeModel.rotation.set(-Math.PI * 0.2, 0, 0)
//                 beeModel.position.set(0, 0, 0)
//                 scene.add(beeModel)

//                 console.log(beeModel)

//                 const vw = window.innerWidth;
//                 const rightX = vw / 150;
//                 const leftX = -vw / 150;

//                 // // HERO SECTION: Bee stays on the right
//                 // gsap.set(beeModel.position, { x: rightX, y: 0 });

                

//                 // ABOUT SECTION: Move to left
//                 gsap.to(beeModel.position, {
//                     x: leftX,
//                     // y: -5,
//                     scrollTrigger: {
//                         trigger: '#about',
//                         start: 'top center',
//                         end: 'bottom center',
//                         scrub: true,
//                     },
//                 });

//                 // SKILLS SECTION: Move to right
//                 gsap.to(beeModel.position, {
//                     x: rightX,
//                     // y: -5,
//                     scrollTrigger: {
//                         trigger: '#skills',
//                         start: 'top center',
//                         end: 'bottom center',
//                         scrub: true,
//                     },
//                 });

//                 // PROJECTS SECTION: Move to left
//                 gsap.to(beeModel.position, {
//                     x: leftX,
//                     // y: -5,
//                     scrollTrigger: {
//                         trigger: '#projects',
//                         start: 'top center',
//                         end: 'bottom center',
//                         scrub: true,
//                     },
//                 });

//                 // CONTACT SECTION: Move to right
//                 gsap.to(beeModel.position, {
//                     x: rightX,
//                     // y: -5,
//                     scrollTrigger: {
//                         trigger: '#contact',
//                         start: 'top center',
//                         end: 'bottom center',
//                         scrub: true,
//                     },
//                 });

               
//             }
//         )

//         //camera
//         const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 1000)
//         camera.position.set(0, 0, 10)
//         camera.lookAt(new THREE.Vector3(0, 0, 0))
//         scene.add(camera)

//         // const directionalLight = new THREE.DirectionalLight(parameters.lightColor, 3)
//         // directionalLight.position.set(4.41, 2.14, 4.09)
//         // scene.add(directionalLight)


//         //renderer
//         const renderer = new THREE.WebGLRenderer({
//             canvas
//         })
//         renderer.shadowMap.enabled = true
//         renderer.setSize(sizes.width, sizes.height)

//         //resize
//         window.addEventListener('resize', () => {
//             sizes.width = window.innerWidth,
//                 sizes.height = window.innerHeight
//             //update camera
//             camera.aspect = sizes.width / sizes.height
//             camera.updateProjectionMatrix()
//             //update renderer
//             renderer.setSize(sizes.width, sizes.height)
//             renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//         })

//         const clock = new THREE.Clock
//         let previousTime = 0
//         const tick = () => {
//             const elapsTime = clock.getElapsedTime()
//             const dt = elapsTime - previousTime
//             previousTime = elapsTime

//             //update mixer
//             if (mixer) {
//                 mixer.update(dt)
//             }

//             //update renderer
//             renderer.render(scene, camera)
//             window.requestAnimationFrame(tick)
//         }
//         tick()

//         console.log()
//     }, [])




//     return (
//         <canvas className="webgl fixed top-0 left-0 z-0 "></canvas>
//     )
// }

// export default Model

"use client"

import { useEffect } from "react"
import * as THREE from "three"
import { GLTFLoader, DRACOLoader } from "three/examples/jsm/Addons.js"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Model = () => {
  useEffect(() => {
    const canvas = document.querySelector("canvas")

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    // Parameters
    const parameters = {}
    parameters.lightColor = 0xffffff

    // Scene
    const scene = new THREE.Scene()

    // GLTF loader
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath("/node_modules/three/examples/jsm/libs/draco/")
    const gltfLoader = new GLTFLoader()
    gltfLoader.setDRACOLoader(dracoLoader)
    let mixer = null
    let beeModel = null

    gltfLoader.load("/stylized_flying_bee_bird_rigged/scene.gltf", (gltf) => {
      // Mixer animation
      mixer = new THREE.AnimationMixer(gltf.scene)
      const action1 = mixer.clipAction(gltf.animations[0])
      action1.play()

      beeModel = gltf.scene
      beeModel.scale.set(0.055, 0.055, 0.055)
      beeModel.rotation.set(-Math.PI * 0.2, 0, 0)
      beeModel.position.set(3, 0, 0) // Start on the right side
      scene.add(beeModel)

      // Set up the bee path animation once the model is loaded
      setupBeePathAnimation(beeModel)

      // Add hover interactions
      setupHoverInteractions(beeModel)
    })

    // Camera
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 1000)
    camera.position.set(0, 0, 10)
    camera.lookAt(new THREE.Vector3(0, 0, 0))
    scene.add(camera)

    // Add some ambient light so the bee is visible
    const ambientLight = new THREE.AmbientLight(0xffffff, 1)
    scene.add(ambientLight)

    // Add directional light for better visibility
    const directionalLight = new THREE.DirectionalLight(parameters.lightColor, 2)
    directionalLight.position.set(1, 1, 1)
    scene.add(directionalLight)

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
    })
    renderer.shadowMap.enabled = true
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Resize handler
    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight

      // Update camera
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()

      // Update renderer
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

      // Update mixer
      if (mixer) {
        mixer.update(dt)
      }

      // Update renderer
      renderer.render(scene, camera)
      window.requestAnimationFrame(tick)
    }
    tick()

    // Function to set up the bee path animation
    function setupBeePathAnimation(beeModel) {
      if (!beeModel) return

      // Define the sections
      const sections = ["hero", "about", "skills", "projects", "contact"]

      // Calculate positions for each section
      // We'll alternate between right and left
      const rightX = 3 // Right side position
      const leftX = -3 // Left side position

      // Set initial position
      beeModel.position.set(rightX, 0, 0)

      // Create individual scroll triggers for each section transition
      sections.forEach((section, index) => {
        // Skip the last section as there's no transition after it
        if (index < sections.length - 1) {
          const nextSection = sections[index + 1]
          const currentSide = index % 2 === 0 ? rightX : leftX
          const nextSide = (index + 1) % 2 === 0 ? rightX : leftX

          // Create a scroll trigger for the transition between this section and the next
          ScrollTrigger.create({
            trigger: `#${section}`,
            start: "bottom 70%", // Start transition when section bottom reaches 70% of viewport
            end: `#${nextSection} top 30%`, // End transition when next section top reaches 30% of viewport
            scrub: 1.5, // Smooth scrubbing with a slight delay for more natural movement
            markers: false, // Set to true for debugging
            onEnter: () => {
              // Create a timeline for this specific transition
              const tl = gsap.timeline()

              // Calculate the midpoint for the curve
              const midY = (index + 0.5) * 2 - 2 // Distribute vertically based on section index

              // First move to the midpoint with a curve
              tl.to(beeModel.position, {
                x: (currentSide + nextSide) / 2,
                y: midY,
                z: index % 2 === 0 ? -1 : 1, // Add some depth to the curve
                duration: 1,
                ease: "power1.inOut",
              })

              // Then move to the final position for the next section
              tl.to(beeModel.position, {
                x: nextSide,
                y: (index + 1) * 2 - 2, // Distribute vertically based on section index
                z: 0,
                duration: 1,
                ease: "power1.inOut",
              })

              // Apply minimal rotation - just enough to face the direction
              tl.to(
                beeModel.rotation,
                {
                  y: index % 2 === 0 ? Math.PI * 0.1 : -Math.PI * 0.1, // Minimal rotation based on direction
                  duration: 2, // Match the total duration of position animation
                  ease: "power1.inOut",
                },
                0,
              ) // Start at the same time as the position animation
            },
            onLeaveBack: () => {
              // Animate back to the current section position when scrolling up
              gsap.to(beeModel.position, {
                x: currentSide,
                y: index * 2 - 2, // Distribute vertically based on section index
                z: 0,
                duration: 1,
                ease: "power1.inOut",
              })

              // Apply minimal rotation when going back
              gsap.to(beeModel.rotation, {
                y: index % 2 === 0 ? -Math.PI * 0.1 : Math.PI * 0.1,
                duration: 1,
                ease: "power1.inOut",
              })
            },
          })
        }
      })

      // Create section-specific triggers to ensure the bee stays in position during each section
      sections.forEach((section, index) => {
        const sideX = index % 2 === 0 ? rightX : leftX
        const sectionY = index * 2 - 2 // Distribute vertically based on section index

        ScrollTrigger.create({
          trigger: `#${section}`,
          start: "top 80%", // When section enters viewport
          end: "bottom 20%", // When section leaves viewport
          scrub: false, // No scrubbing needed here
          markers: false,
          onEnter: () => {
            // Ensure the bee is in the correct position for this section
            gsap.to(beeModel.position, {
              x: sideX,
              y: sectionY,
              z: 0,
              duration: 1,
              ease: "power2.out",
            })

            // Set the appropriate rotation for this section
            gsap.to(beeModel.rotation, {
              y: index % 2 === 0 ? -Math.PI * 0.2 : Math.PI * 0.2,
              z: 0, // Reset any z rotation
              duration: 1,
              ease: "power2.out",
            })
          },
          onEnterBack: () => {
            // Same as onEnter, to handle scrolling back up
            gsap.to(beeModel.position, {
              x: sideX,
              y: sectionY,
              z: 0,
              duration: 1,
              ease: "power2.out",
            })

            // Set the appropriate rotation for this section
            gsap.to(beeModel.rotation, {
              y: index % 2 === 0 ? -Math.PI * 0.2 : Math.PI * 0.2,
              z: 0,
              duration: 1,
              ease: "power2.out",
            })
          },
        })
      })
    }

    // Add this function after the setupBeePathAnimation function
    function setupHoverInteractions(beeModel) {
      if (!beeModel) return

      // Define the sections
      const sections = ["hero", "about", "skills", "projects", "contact"]

      // Add hover interactions for each section
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId)
        if (!section) return

        // When hovering over a section
        section.addEventListener("mouseenter", () => {
          // Make the bee excited - scale up slightly and increase wing flap speed
          gsap.to(beeModel.scale, {
            x: 0.065,
            y: 0.065,
            z: 0.065,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)",
          })

          // Add a slight bounce animation
          gsap.to(beeModel.position, {
            y: beeModel.position.y + 0.5,
            duration: 0.5,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut",
          })

          // Increase animation speed if mixer exists
          if (mixer) {
            mixer.timeScale = 2.0 // Double the animation speed
          }
        })

        // When leaving a section
        section.addEventListener("mouseleave", () => {
          // Return to normal size
          gsap.to(beeModel.scale, {
            x: 0.055,
            y: 0.055,
            z: 0.055,
            duration: 0.5,
            ease: "power2.out",
          })

          // Return animation speed to normal
          if (mixer) {
            mixer.timeScale = 1.0
          }
        })
      })
    }
  }, [])

  return <canvas className="webgl fixed top-0 left-0 z-0"></canvas>
}

export default Model
