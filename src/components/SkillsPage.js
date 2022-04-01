import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from './Themes';
import {Design, Develope} from './AllSvgs';
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
top: 150px;
width: 70vw;
height: fit-content;
z-index: 3;
line-height: 1.5;
cursor: pointer;

font-family: monospace;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`
const Title = styled.h2`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);
${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}
&>*:first-child{
    margin-right: 1rem;
}
`
const p = styled.h3`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;
${Main}:hover &{
    
    color:${props => props.theme.body};

}
strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul, p{
    margin-left: 2rem;
}
`

const SkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                <LogoComponent theme='light' />
                <SocialIcons theme='light' />
                <ParticleComponent theme='light' />
                <Main>
                    <div className="mobile-shrink-2">
                    <img src="img/dunningkruger.png" width="450px" height="350px"/>
                    </div>
                    <p>
                    As a result of my education, research and work experience,
                    I've developed competence in a variety of fields stretching from electrical circuits,
                    automation, data science to computer networks. My biggest skill is the ability to promptly
                    look up solutions to problems or read the manual.
                    Stack Overflow should have been my default search engine in 2020-2021.
                    I enjoy experimenting in my lab with various IoT devices,
                    electronics and security tools, also collecting, parsing, visualizing and analyzing data logs.
                    Apart from being full-time employed as a system integrator,
                    I'm currently pursuing personal projects in network security / CISSP Certification
                    and object detection - Cybersecurity and Data Engineering.
                    </p>
                    <div className="bottom-space-sm" />
                    <p>
                    <strong>
                    TOOLS / TECHNOLOGIES
                        </strong>
                        <ul>
                            <p>Linux / Unix, Bash, Windows, Google, AWS, Python, SQL, ETL, JS, GIT, NVIDIA, TCP/IP, HTTP, SSH, OpenVPN, RS232/485, MODBUS and more</p>
                        </ul>
                    </p>
                </Main>
            </Box>
        </ThemeProvider>
    )
}

export default SkillsPage