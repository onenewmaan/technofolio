import React, { useRef } from "react";
import WormholeMap from '../../assets/textures/wormhole.jpg';
import CloudsMap from '../../assets/textures/cloud.png';
import { TextureLoader } from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { Universe } from './Universe'
import { Stars } from '@react-three/drei';


export function Wormhole(props){

    const [wormholeMap, cloudMap] = useLoader(TextureLoader, [WormholeMap, CloudsMap]);
    
    const wormholeRef = useRef();
    const cloudsRef = useRef();
    const starRef = useRef();


    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
    
        wormholeRef.current.rotation.y = elapsedTime / 2;
        wormholeRef.current.rotation.z = elapsedTime / 10;
        cloudsRef.current.rotation.y = elapsedTime / -2;
        // starRef.current.rotation.z = elapsedTime / -20;

      });

    return (
    <>
    
        <ambientLight intensity={0.3} />
        <pointLight color="#f6f3ea" position={[10, 0, 10]} intensity={2} />
        <Stars ref={starRef} radius={300} depth={60} count={15000} factor={7} saturation={0} fade={true} />
            <mesh ref={cloudsRef} position={[0, 0, 0]} >
                <sphereGeometry args={[2.25, 32, 32]} />
                <meshPhongMaterial
                map={cloudMap}
                opacity={1}
                depthWrite={true}
                transparent={true}
                />
            </mesh>
        <mesh ref={wormholeRef} position={[0, 0, 0]}>
            <sphereGeometry args={[1.8, 32, 32]} />
            <meshStandardMaterial map={wormholeMap} metalness={0.98} roughnes={0.25} />
        </mesh>
        <Universe />
    </>
    );
}