import React, { useState } from "react";
import styled from 'styled-components';
import TopButton from "../subComponents/TopButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { NavLink } from "react-router-dom";
import { WWW } from "./AllSvgs";
import {motion} from 'framer-motion';
import Intro from "./Intro";

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
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;
`
const WORK = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 50%;
left: 2rem;
transform: rotate(-90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;
`
const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
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
&>:first-child{
    padding-top: 1rem;
}
&>:last-child{
    display: ${props => props.click ? 'none' : 'inline-block'};
    padding-top: 1rem;
}
`
const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%':'0%'};
height: ${props => props.click ? '100%':'0%'};
z-index: 1;
transition: height 0.5s ease, width 1s ease 0.5s;
`

const Main = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <MainContainer>
            <Container>
                <TopButton />
                <LogoComponent theme={click ? 'dark' : 'light' } />
                <SocialIcons theme={click ? 'dark' : 'light' } />
                <DarkDiv click={click} />
                <Center click={click}>
                    <WWW onClick={()=> handleClick()} height={click ? 100:200} width={click ? 100:200} fill='currentColor' />
                    <span>click</span>
                </Center>
                <Contact target="_blank" to={{pathname: "mailto:nowiczenko@pm.me"}}>
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
                        Say hi..
                    </motion.h2>
                </Contact>
                <BLOG to="/blog">
                <motion.h3
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    >
                        Blog
                    </motion.h3>
                </BLOG>
                <WORK to="/work" >
                <motion.h3
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    >
                        Work
                    </motion.h3>
                </WORK>
                <BottomBar>
                    <ABOUT to="/about">
                    <motion.h3
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    >
                            About.
                        </motion.h3>
                    </ABOUT>
                    <SKILLS to="/skills">
                    <motion.h3
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    >
                            Skills.
                        </motion.h3>
                    </SKILLS>
                </BottomBar>
            </Container>
            {click ? <Intro click={click} /> : null }
        </MainContainer>
    )
}

export default Main