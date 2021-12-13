import * as THREE from'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Experience from './Experience.js'

export default class Camera
{
    constructor()
    {
        /**
         * Singlton
         */
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas

        this.setInstance()
        this.setControls()
    }

    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera(
            35, 
            this.sizes.width / this.sizes.height,
            0.1,
            100
        )
        this.instance.position.set(6, 4, 8)
        this.scene.add(this.instance)
        
    }

    setControls()
    {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
    }

    resize()
    {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update()
    {
        this.controls.update()
    }
}



        // inside constructor(){}
        /**
         * from parameter
         */
        /*
        this.experience = experience
        console.log(this.experience.sizes.width) // 'experience' as a parameter must be in 'constructor(experience)' in this camara.js, AND in experience.js in the setup 'this.camera = new Camera(this)'
        */

        /**
         * global and simplest solution for camera:
         */
        /*
        this.experience = window.experience
        console.log(this.experience.sizes.width)
        */