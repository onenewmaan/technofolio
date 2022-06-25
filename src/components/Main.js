import React from "react";
import styled from 'styled-components';
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { NavLink } from "react-router-dom";
import {motion} from 'framer-motion';

const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;
position: relative;

h2,h3,h4,h5,h6{
    font-family: 'Karla', sans-serif;
    font-weight: 500;
}
`

const Container = styled.div`
padding: 2rem;

`

const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
`

const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 55%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;
`
const WORK = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 47%;
left: 2rem;
transform: rotate(-90deg) translate(-50%, -50%);
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
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index: 1;
`

const Center = styled.button`
position: absolute;
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
                <SocialIcons />
                <Center>
                    <h2>open <i>space</i> of tomorrow's ideas</h2>
                    <p style={{fontSize:'15px',textAlign:'justify'}}>for clients ~ with clients</p>
                </Center>
                <Contact target="_blank" to={{pathname: "mailto:aggie.pictures@pm.me"}}>
                    <motion.h2
                    initial={{
                        y:-200,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    animate={{
                        y:0,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    
                    >
                        contact.
                    </motion.h2>
                </Contact>
                <BLOG to="/photography">
                <motion.h3
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    >
                        photography
                    </motion.h3>
                </BLOG>
                <WORK to="/design" >
                <motion.h3
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    >
                        design
                    </motion.h3>
                </WORK>
                <BottomBar>
                    <ABOUT to="/project">
                    <motion.h3
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    >
                            projects
                        </motion.h3>
                    </ABOUT>
                    <SKILLS to="/skills">
                    <motion.h3
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    >
                            artecture
                        </motion.h3>
                    </SKILLS>
                </BottomBar>
            </Container>
        </MainContainer>
    )
}

export default Main