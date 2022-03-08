import React from "react";
import styled from "styled-components";
import Particles from 'react-particles-js';

import configDark from '../config/particlesjs-config.json';
import configLight from '../config/particlesjs-config-light.json';


const ParticleBox = styled.div`
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
z-index: 0;

`

const ParticleComponent = (props) => {
    return (
        <ParticleBox>
            <Particles style={{position:'absolute', top:0}} params={props.theme === 'light' ? configLight : configDark } />
        </ParticleBox>
    )
}

export default ParticleComponent