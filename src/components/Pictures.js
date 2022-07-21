import * as THREE from 'three'
import React, { useRef, useState } from "react";
import styled from 'styled-components';
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import LogoComponent from "../subComponents/LogoComponent";

import { Universe } from './universe/Universe';
import { Wormhole } from './universe/Wormhole';
import { Galaxy } from './universe/Galaxy';
import '../styles.css'


const Picture = () => { 

  return (
    <>
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} >
      <Universe />
      <Galaxy />
      <Wormhole />
      </Canvas>
        
    </>
  )
}


export default Picture