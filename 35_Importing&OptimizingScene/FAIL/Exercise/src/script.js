import './style.css'
import * as dat from 'dat.gui'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

/**
 * Base
 */
// Debug
const gui = new dat.GUI({
    width: 400
})

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Loaders
 */
// Texture loader
const textureLoader = new THREE.TextureLoader()

// Draco loader
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('draco/')

// GLTF loader
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

/**
 * Texture
 */
const bakedTexture = textureLoader.load('/MyBaked.jpg')
bakedTexture.flipY = false
bakedTexture.encoding = THREE.sRGBEncoding

/**
 * Material
 */
// Baked Material
const bakedMaterial = new THREE.MeshBasicMaterial({map: bakedTexture})

// DiscoLight Material
const discoMaterial = new THREE.MeshBasicMaterial({ color: 0xFA5BFF})

// PoleLight Material
const lampLightMaterial = new THREE.MeshBasicMaterial({ color: 0x3E1C0F})


/**
 * Model
 */
gltfLoader.load(
    'MyPortal.glb',
    (gltf) =>
    {
        
            gltf.scene.traverse((child) =>
            {
                child.material = bakedMaterial
            })
            scene.add(gltf.scene)
        
        // console.log(gltf.scene.children)

        // Get each object
        const bakedMesh = gltf.scene.children.find(child => child.name === 'baked')
        const discoMesh = gltf.scene.children.find(child => child.name === 'Disco')
        const lampLightMesh = gltf.scene.children.find(child => child.name === 'LampLight')
        const lampLight2Mesh = gltf.scene.children.find(child => child.name === 'LampLight2')

        // Apply material
        bakedMesh.material = bakedMaterial
        discoMesh.material = discoMaterial
        lampLightMesh.material = lampLightMaterial
        lampLight2Mesh.material = lampLightMaterial
              
        })
    

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 4
camera.position.y = 2
camera.position.z = 4
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.outputEncoding = THREE.sRGBEncoding

/**
 * Animate
 */
 const clock = new THREE.Clock()

 const tick = () =>
 {
     const elapsedTime = clock.getElapsedTime()
 
     // Update controls
     controls.update()
 
     // Render
     renderer.render(scene, camera)
 
     // Call tick again on the next frame
     window.requestAnimationFrame(tick)
 }
 
tick()