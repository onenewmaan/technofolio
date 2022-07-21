import React, { useMemo, useRef } from "react"
import {  useFrame } from "@react-three/fiber";
import * as THREE from "three";

const parameters = {}

parameters.count = 5000
parameters.size = 0.0025
parameters.radius = 100
parameters.branches = 4
parameters.spin = -0.25
parameters.randomness = 0.95
parameters.randomnessPower = 0.075
parameters.insideColor = '#ff6030'
parameters.outsideColor = '#1b3984'

export function Galaxy(props){

    const [positions, colors] = useMemo(() => {
        let positions = [],
          colors = []
        for (let i = 0; i < parameters.count; i++) {
            //Position
        const x = Math.random() * parameters.radius
        const branchAngle = (i % parameters.branches) / parameters.branches * 2 * Math.PI
        const spinAngle = x * parameters.spin

        const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random()<0.5 ? 1: -1) 
        const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random()<0.5 ? 1: -1) 
        const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random()<0.5 ? 1: -1)
        positions[i*3] = Math.sin(branchAngle + spinAngle) * x + randomX
        positions[i*3 + 1] = randomY
        positions[i*3 + 2] = Math.cos(branchAngle + spinAngle) * x + randomZ
        
        //Color

        const colorInside = new THREE.Color(parameters.insideColor)
        const colorOutside = new THREE.Color(parameters.outsideColor)


        const mixedColor = colorInside.clone()
        mixedColor.lerp(colorOutside, x / parameters.radius)

        colors[i*3 + 0] = mixedColor.r
        colors[i*3 + 1] = mixedColor.g
        colors[i*3 + 2] = mixedColor.b

        }
        return [new Float32Array(positions), new Float32Array(colors)]
        // eslint-disable-next-line
      }, [parameters.count])

      const attrib = useRef()
      const galaxyRef = useRef();

      useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
    
        
        galaxyRef.current.rotation.y = elapsedTime / 2;
        galaxyRef.current.rotation.x = elapsedTime / -40;

      });

    return (
        <points ref={galaxyRef}>
          <bufferGeometry attach="geometry">
            <bufferAttribute attachObject={["attributes", "position"]} count={positions.length / 3} array={positions} itemSize={3} />
            <bufferAttribute ref={attrib} attachObject={["attributes", "color"]} count={colors.length / 3} array={colors} itemSize={3} />
          </bufferGeometry>
          <pointsMaterial attach="material" vertexColors size={parameters.size} sizeAttenuation={true} />
        </points>
      );
}