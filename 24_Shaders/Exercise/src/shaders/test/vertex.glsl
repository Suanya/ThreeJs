
uniform vec2 uFrequency;
uniform float uTime;

varying vec2 vUv;
varying float vElevation;

void main()
    {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);

        float elevation = sin(modelPosition.x * uFrequency.x - uTime) * 0.1;
        elevation += sin(modelPosition.y * uFrequency.y - uTime) * 0.1;

        modelPosition.z += sin(modelPosition.x * uFrequency.x - uTime) * 0.1;
        modelPosition.z += sin(modelPosition.y * uFrequency.y - uTime) * 0.1;

        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;

         gl_Position = projectedPosition; // will be called automatic, you need to have this line! No return!    

        vUv = uv;
        vElevation = elevation;
    }

    
/*
With RawShaderMaterial
uniform mat4 projectionMatrix;  // transforms the coordinates into the clip scene coordinates
uniform mat4 viewMatrix;        // apply transformation relative to the camera (position, rotation, fov, near, far)
uniform mat4 modelMatrix;       // apply transformation relative to the mesh (position, rotation, scale)
uniform vec2 uFrequency;
uniform float uTime;
*/
