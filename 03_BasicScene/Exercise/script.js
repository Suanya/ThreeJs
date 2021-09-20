// Scene
const scene = new THREE.Scene()

// RedCube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'red'})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh) 

// Sizes
const sizes = 
{
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height) // 1st parameter FoV - 2nd parameter is aspect ratio = size (width/height) but which size?
camera.position.z = 3
//camera.position.x = 2
//camera.position.y = 2
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer(
    {
        canvas: canvas
    }
)
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)