import * as THREE from 'three'

import Experience from '../Experience.js'
import Environment from './Environment.js'
import Floor from './Floor.js'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // testMesh
        const testMesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshStandardMaterial()
        )
        this.scene.add(testMesh)

        // Wait for resources
        this.resources.on('ready', () =>
        {
            // setUp when resources are ready!
            this.floor = new Floor()
            this.environment = new Environment()
            
        })
        

        
    }
}