import React from "react";
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { darkTheme } from './Themes';
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import TopButton from "../subComponents/TopButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from '../subComponents/BigTitle'
import { Chrono } from "react-chrono";
import data from "./data";


const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 80vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: 50%;
transform: translate(-50%, 0);
  top: 6rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`


const AboutPage = () => {

    return (
        <ThemeProvider theme={darkTheme}>
            <Box>
                <LogoComponent theme='dark'/>
                <SocialIcons theme='dark'/>
                <TopButton />
                <ParticleComponent theme='dark' /> 
                <Main>
                <Chrono items={data} mode="VERTICAL_ALTERNATING" useReadMore={false} />
                </Main>
                <BigTitle text="ABOUT" top="10%" left="5%" />
            </Box>
        </ThemeProvider>
    )
}

export default AboutPage