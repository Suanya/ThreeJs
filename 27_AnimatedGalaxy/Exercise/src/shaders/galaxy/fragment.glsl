varying vec3 vColor;

void main()
    {
    
        //LightPoint
        float strength = distance(gl_PointCoord, vec2(0.5));
        strength = 1.0 - strength;
        strength = pow(strength, 10.0);

        // FinalColor
        vec3 color = mix(vec3(0.0), vColor, strength);
        gl_FragColor = vec4(color, 1.0);
    }


// GoodToHave
// NormalUV
/*
    void main()
    {
        gl_FragColor = vec4(gl_PointCoord, 1.0, 1.0);
    }
*/

// Disc
/*
    void main()
    {
        float strength = distance(gl_PointCoord, vec2(0.5));
        strength = step(0.5, strength);
        strength = 1.0 - strength;

        gl_FragColor = vec4(color, 1.0);
    }
*/

// Diffuse
/*
    void main()
    {
        float strength = distance(gl_PointCoord, vec2(0.5));
        strength *= 2.0;
        strength = 1.0 - strength;

        gl_FragColor = vec4(color, 1.0);
    }
*/