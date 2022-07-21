import React from "react";
import styled from 'styled-components';
import LogoComponent from "../subComponents/LogoComponent";
import { NavLink } from "react-router-dom";
import {motion} from 'framer-motion';


const MainContainer = styled.div`
background-color: white;
width: 100vw;
height: 100vh;
overflow: hidden;
position: relative;

h1,h2,h3,h4,h5,h6{
    font-family: 'Karla', sans-serif;
    font-weight: 500;
}
`
const Container = styled.div`
padding: 2rem;
`
const PROFILE = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
`
const BottomBar = styled.div`
position: absolute;
top: 2.5rem;
left: 0;
right: 0;
width: 100%;
display: flex;
justify-content: space-evenly;
`
const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index: 1;
`
const PICTURES = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index: 1;
`
const Center = styled.div`
position: absolute;
border: 2px solid black;
top: ${props => props.click ? '85%':'50%' };
left: ${props => props.click ? '92%':'50%'};
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;
`

const Main = () => {
    return (
        <MainContainer>
            <Container>
                <LogoComponent />
                <Center>
                    <div class="poster">
                        <div class="lens-flare"></div>
                        <div class="info">
                            <header>
                                <p>Presents</p>
                            </header>
                            <section id="venue">
                                <h3>A <i>COLLECTION</i> OF</h3>
                            </section>
                            <footer>
                                <div class="venue">
                                    <h3>projects, designs & notes.</h3><br />
                                </div>
                            </footer>
                        </div>
                    </div>
                </Center>
                <PROFILE to="/profile">
                        <motion.h3 initial={{  y:-200, transition: { type:'spring', duration: 1.5, delay:1}}}
                            animate={{ y:0,transition: { type:'spring', duration: 1.5, delay:0.5}}}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            style={{ color: 'black', textDecoration:'none', fontSize: '1em' }}
                            >
                            profile. 
                        </motion.h3>
                    </PROFILE>
                <BottomBar>
                    <ABOUT to="/projects">
                        <motion.h3 whileHover={{scale: 1.1}}whileTap={{scale: 0.9}}
                        style={{ color: 'black', textDecoration:'none', fontSize: '1em' }}>
                                projects
                        </motion.h3>
                    </ABOUT>
                    <PICTURES to={{pathname: 'https://outerspaces.io'}} target="_blank">
                        <motion.h3
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        style={{ color: 'black', textDecoration:'none', fontSize: '1em' }}
                        >
                            spaces 
                        </motion.h3>
                    </PICTURES>
                </BottomBar>
            </Container>
        </MainContainer>
    )
}

export default Main