import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FontLoader} from "three/examples/jsm/loaders/FontLoader";
import  { TextGeometry} from "three/examples/jsm/geometries/TextGeometry";

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const matcapTexture = textureLoader.load('/textures/matcaps/9.png')

/**
 * Fonts
 */
const fontLoader = new FontLoader()

// EXPLORE
fontLoader.load(
    'fonts/jetBrains Mono SemiBold_Regular.json',
    (font) =>
    {
        const exploreGeometry = new TextGeometry(
            'EXPLORE',
            { 
                font: font,
                size: 0.5,
                height: 0.2,
                curveSegments: 5,
                bevelEnabled: true,
                bevelThickness: 0.04,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 4
            }
        )
        //exploreGeometry.center()
        
        const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture })
        const text = new THREE.Mesh(exploreGeometry, material)
        scene.add(text)

        exploreGeometry.computeBoundingBox()
        exploreGeometry.translate(
            - (exploreGeometry.boundingBox.max.x - 0.2)* 0.5,
            + (exploreGeometry.boundingBox.max.y - 0.2) * 0.99 + 1,
            - (exploreGeometry.boundingBox.max.z - 0.3) * 0.5
        )
        
        // Snowall Confetti
        const snowballGeometry = new THREE.SphereBufferGeometry(0.1, 0.3, 0.7)

        for(let i = 0; i < 100; i++)
        {
            // insideBody
            const snowball = new THREE.Mesh(snowballGeometry, material)

            // position
            snowball.position.x = (Math.random() - 0.5) * 100
            snowball.position.y = (Math.random() - 0.5) * 100
            snowball.position.z = (Math.random() - 0.5) * 100

            // rotation
            snowball.rotation.x = Math.random() * Math.PI
            snowball.rotation.y = Math.random() * Math.PI

            // scale
            const scale = Math.random()
            snowball.scale.set(scale, scale, scale)

            // addToScene
            scene.add(snowball)
        }

        // Heartflakes Confetti
        const x = 0, y = 0
        const heartShape = new THREE.Shape()
        
        heartShape.moveTo( x + 5, y + 5 )
        heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y )
        heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 )
        heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 )
        heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 )
        heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y )
        heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 )

        // outsideBody
        const heartflakeGeometry = new THREE.ShapeGeometry(heartShape)
        for(let i = 0; i < 1000; i++)
        {
            // insideBody
            const heartflake = new THREE.Mesh(heartflakeGeometry, material)

            // position
            heartflake.position.x = (Math.random() - 0.5) * 50
            heartflake.position.y = (Math.random() - 0.5) * 50
            heartflake.position.z = (Math.random() - 0.5) * 50


            // rotation
            heartflake.rotation.x = Math.random() * Math.PI
            heartflake.rotation.y = Math.random() * Math.PI

            // scale
            const scale = Math.random() * 0.033
            heartflake.scale.set(scale, scale, scale)

            // addToScene
            scene.add(heartflake)
        }

        const icoflakeGeometry = new THREE.IcosahedronBufferGeometry(0.1,0)

        for(let i = 0; i < 500; i++)
        {
            // insideBody
            const icoflake = new THREE.Mesh(icoflakeGeometry, material)

            // position
            icoflake.position.x = (Math.random() - 0.5) * 10
            icoflake.position.y = (Math.random() - 0.5) * 10
            icoflake.position.z = (Math.random() - 0.5) * 10

            // rotation
            icoflake.rotation.x = Math.random() * Math.PI
            icoflake.rotation.y = Math.random() * Math.PI
            
            // Scale
            const scale = Math.random() * 0.5
            icoflake.scale.set(scale, scale, scale)
            
            scene.add(icoflake)
        }
    }
)

// YOUR
fontLoader.load(
    'fonts/jetBrains Mono SemiBold_Regular.json',
    (font) =>
    {
        const yourGeometry = new TextGeometry(
            'YOUR',
            {
                font: font,
                size: 0.5,
                height: 0.2,
                curveSegments: 5,
                bevelEnabled: true,
                bevelThickness: 0.04,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 4
            }
        )
        //yourGeometry.center()

        const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture })
        const text = new THREE.Mesh(yourGeometry, material)
        scene.add(text)

        yourGeometry.computeBoundingBox()
        yourGeometry.translate(
            - (yourGeometry.boundingBox.max.x - 0.2)* 0.5,
            + (yourGeometry.boundingBox.max.y - 0.2) * 0.99 ,
            - (yourGeometry.boundingBox.max.z - 0.3) * 0.5
        )
    }
)

// EXCITEMENT
fontLoader.load(
    'fonts/jetBrains Mono SemiBold_Regular.json',
    (font) =>
    {
        const excitementGeometry = new TextGeometry(
            'EXCITEMENT',
            {
                font: font,
                size: 0.5,
                height: 0.2,
                curveSegments: 5,
                bevelEnabled: true,
                bevelThickness: 0.04,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 4
            }
        )
        //excitementGeometry.center()

        const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture })
        const text = new THREE.Mesh(excitementGeometry, material)
        scene.add(text)

        excitementGeometry.computeBoundingBox()
        excitementGeometry.translate(
            - (excitementGeometry.boundingBox.max.x - 0.2) * 0.5,
            + (excitementGeometry.boundingBox.max.y - 0.2) * 0.99 - 1 ,
            - (excitementGeometry.boundingBox.max.z - 0.3) * 0.5
        )
    }
)

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
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 3
camera.position.y = 1
camera.position.z = 4
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

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