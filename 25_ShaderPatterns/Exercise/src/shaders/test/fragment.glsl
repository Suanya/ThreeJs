#define PI 3.1415926535897932384626433832795

varying vec2 vUv;

float random(vec2 st)
{
    return frac(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

vec2 rotate(vec2 uv, float rotation, vec2 mid)
{
    return vec2(
        cos(rotation) * uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
        cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
    );
}

// LittleStar_Variation
/*
void main()
{
    float pi = 3.1415926535897932384626433832795;
    vec2 rotatedUv = rotate(vUv, PI * 0.25, vec2(0.5));

    vec2 lightUvX = vec2(rotatedUv.x * 0.1 + 0.45, rotatedUv.y * 0.5 + 0.25);
    float lightX = 0.015 / distance(lightUvX, vec2(0.5));

    vec2 lightUvY = vec2(rotatedUv.y * 0.1 + 0.45, rotatedUv.x * 0.5 + 0.25);
    float lightY = 0.015 / distance(lightUvY, vec2(0.5));

    float strength = lightX * lightY;
    
    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/

// LittleStar
/*
void main()
{
    float strength = 0.15 / (distance(vec2(vUv.x, (vUv.y - 0.5) * 5.0 + 0.5), vec2(0.5)));
    strength *= 0.15 / (distance(vec2(vUv.y, (vUv.x - 0.5) * 5.0 + 0.5), vec2(0.5)));   

    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/


// SqueezedPlanet
/*
void main()
{
    vec2 lightUV = vec2(vUv.x, vUv.y);
    float strength = 0.15 / (distance(vec2(vUv.x, (vUv.y - 0.5) * 5.0 + 0.5), vec2(0.5)));

    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/

// KleinerPlanet
/*
void main()
{
    float strength = 0.01 / distance(vUv, vec2(0.5));
    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/


// HellesLochGradient_MitDistanceZumWandern
/*
void main()
{
    float strength = 1.0 - distance(vUv, vec2(0.7, 0.4));
    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/


// HellesLochGradient
/*
void main()
{
    float strength = 1.0 - length(vUv - 0.5);
    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/

// DunklesLochGradient_MitDistanceZumWandern
/*
void main()
{
    float strength = distance(vUv, vec2(0.2, 0.8));
    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/

// DunklesLochGradient
/*
void main()
{
    float strength = length(vUv - 0.5);
    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/


// DunklesEckGradient
/*
void main()
{
    float strength = length(vUv);
    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/


// ScreenRauschen_BigPixel_Schräg
/*
float random(vec2 st)
{
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main()
{
    vec2 gridUv = vec2(
        floor(vUv.x * 10.0) / 10.0,
        floor((vUv.y + vUv.x) * 10.0) / 10.0
    );

    float strength = random(gridUv);

    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/


// ScreenRauschen_BigPixel
/*
float random(vec2 st)
{
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main()
{
    vec2 gridUv = vec2(
        floor(vUv.x * 10.0) / 10.0,
        floor(vUv.y * 10.0) / 10.0
    );

    float strength = random(gridUv);

    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/

// ScreenRauschen
/*
float random(vec2 st)
{
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main()
{
    float strength = random(vUv);

    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/


// GradienKarriert
/*
void main()
{
    float strength = floor(vUv.x * 10.0) / 10.0;
    strength *= 1.0 - floor(vUv.y * 10.0) / 10.0;
    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/

// GradienGestreift
/*
void main()
{
    float strength = floor(vUv.x * 10.0) / 10.0;
    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/

// ThinFrame
/*
void main()
{
    float strength = step(0.4, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));

    gl_FragColor = vec4 (strength, strength, strength, 1.0);
}
*/


// ThickFrame
/*
void main()
{
    float strength =  step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));

    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/

// BlackWhiteGradient_Kreuz
/*
void main()
{
    float strength = min(abs(vUv.x - 0.5), abs(vUv.y - 0.5));

    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/

// BlackWhiteGradient_Offset
/*
void main()
{
    float strength = abs(vUv.x - 0.5);

    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/

// KreuzGrid
/*
void main()
{
    float barX = step(0.4, mod(vUv.x * 10.0, 1.0));
    barX *= step(0.8, mod(vUv.y * 10.0 + 0.2, 1.0));
    
    float barY = step(0.8, mod(vUv.x * 10.0 + 0.2, 1.0));
    barY *= step(0.4, mod(vUv.y * 10.0, 1.0));
    
    float strength = barX + barY;

    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/

// DreiecksGrid
/*
void main()
{
    float barX = step(0.4, mod(vUv.x * 10.0, 1.0));
    barX *= step(0.8, mod(vUv.y * 10.0, 1.0));
    
    float barY = step(0.8, mod(vUv.x * 10.0, 1.0));
    barY *= step(0.4, mod(vUv.y * 10.0, 1.0));
    
    float strength = barX + barY;

    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/

// PointLineGrid
/*
void main()
{
    
    float strength = step(0.4, mod(vUv.x * 10.0, 1.0));
    strength *= step(0.8, mod(vUv.y * 10.0, 1.0));

    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/

// PointGrid
/*
void main()
{
    
    float strength = step(0.8, mod(vUv.x * 10.0, 1.0));
    strength *= step(0.8, mod(vUv.y * 10.0, 1.0));

    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/

// Grid
/*
void main()
{
    
    float strength = step(0.8, mod(vUv.x * 10.0, 1.0));
    strength += step(0.8, mod(vUv.y * 10.0, 1.0));

    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/

// DünnGestreift
/*
void main()
{
    float strength = mod(vUv.y * 10.0, 1.0);
    strength = step(0.8, strength);

    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/

// HardGerstreift StepFunction
/*
void main()
{
    float strength = mod(vUv.y * 10.0, 1.0);
    strength = step(0.5, strength);

    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/

// HardGerstreift ShorterWay
/*
void main()
{
    float strength = mod(vUv.y * 10.0, 1.0);
    strength = strength < 0.5 ? 0.0 : 1.0;

    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/

// HardGerstreift LilShorterWay
/*
void main()
{
    float strength = mod(vUv.y * 10.0, 1.0);

    if(strength < 0.5)
        strength = 0.0;
    else
        strength = 1.0;

    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/
    
// HardGestreift LongWay
/*
void main()
{
    float strength = mod(vUv.y * 10.0, 1.0);

    if(strength < 0.5)
    {
        strength = 0.0;
    }
    else
    {
        strength = 1.0;
    }

    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/


// SmoothGestreift
/*
void main()
{
    float strength = mod(vUv.y * 10.0, 1.0);
    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/



// StartGradientMoreDown
/*
void main()
{
    float strength = 1.0 - vUv.y * 10.0;
    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/

// Strength BlackWhiteGradient UpsideDown
/*
void main()
{
    float strength = 1.0 - vUv.y;
    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/

// Strength BlackWhiteGradient
/*
void main()
{
    float strength = vUv.x;
    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
*/

// Simple BlackWhiteGradient
/*
void main()
{
    gl_FragColor = vec4(vUv.x, vUv.x, vUv.x, 1.0);
}
*/

// Grey
/*
void main()
{
    gl_FragColor = vec4(0.5, 0.5, 0.5, 0.5); // all the same
}
*/

// BP - GR Mix
/*
void main()
{
    gl_FragColor = vec4(vUv, 0.5, 1.0);
}
*/

// GreenRedNormal
/*
void main()
{
    gl_FragColor = vec4(vUv, 0.0 , 1.0);
}
*/

// BluishPinkNormal
/*
void main()
{
    gl_FragColor = vec4(vUv,1.0 , 1.0);
}
*/

