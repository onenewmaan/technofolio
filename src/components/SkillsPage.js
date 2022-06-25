import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from './Themes';
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";

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
                <Main>
                    <p>
                    </p>
                    <div className="bottom-space-sm" />
                    <p>
                    <strong>
                        </strong>
                        <ul>
                            <p>...</p>
                        </ul>
                    </p>
                </Main>
            </Box>
        </ThemeProvider>
    )
}

export default SkillsPage