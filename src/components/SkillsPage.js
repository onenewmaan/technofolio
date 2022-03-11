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
width: 30vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
cursor: pointer;

font-family: monospace;
display: flex;
flex-direction: column;
justify-content: space-between;
&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`
const Title = styled.h2`
display: flex;
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
const Description = styled.h3`
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
                    <Title>
                        <Design width={40} height={40} /> Design
                    </Title>
                    <Description>
                    I'm a front-end developer located in India. I love to create simple yet beautiful websites with great user experience.
                    </Description>
                    <Description>
                    <strong>
                    SKILL 
                        </strong>
                        <ul>
                            <li>
                                Design
                            </li>
                            <li>
                                Web2 Web3
                            </li>
                        </ul>
                    </Description>
                </Main>
                <Main>
                    <Title>
                        <Develope width={40} height={40} /> Design
                    </Title>
                    <Description>
                    I'm a front-end developer located in India. I love to create simple yet beautiful websites with great user experience.
                    </Description>
                    <Description>
                    <strong>
                    TOOLS
                        </strong>
                        <ul>
                            <p>Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc.</p>
                        </ul>
                    </Description>
                </Main>
            </Box>
        </ThemeProvider>
    )
}

export default SkillsPage