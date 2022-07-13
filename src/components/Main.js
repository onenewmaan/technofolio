import React from "react";
import styled from 'styled-components';
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { NavLink } from "react-router-dom";
import {motion} from 'framer-motion';


const MainContainer = styled.div`
background-color: white;
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
                <SocialIcons />
                <Center>
                <div class="poster">
                    <div class="lens-flare"></div>
                    <div class="stripes">
                        <div class="stripe-block str1">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div class="stripe-block str2">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div class="stripe-block str3">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="info">

                        <header>
                            <h3>Codepen</h3>
                            <p>Presents</p>
                        </header>

                        <main>
                            <svg id="text-1" viewBox="0 0 450 100">
                                <rect mask="url(#knockout-text-1)" />

                                <mask id="knockout-text-1">
                                    <rect />
                                    <text x="50%" y="80" text-anchor="middle">Summer</text>
                                </mask>
                            </svg>

                            <svg id="text-2" viewBox="0 0 450 100">
                                <rect mask="url(#knockout-text-2)" />

                                <mask id="knockout-text-2">
                                    <rect />
                                    <text x="50%" y="80" text-anchor="middle">Lounge</text>
                                </mask>
                            </svg>
                        </main>

                        <section id="date">
                            <div class="circle-item">22</div>
                            <div class="circle-item">Jan</div>
                            <div class="circle-item">2022</div>
                        </section>

                        <section id="talent">
                            <div class="dj-title">Featuring</div>
                            <ul class="dj-list">
                                <li>DJ Coyier</li>
                                <li>//</li>
                                <li>DJ Kuhn</li>
                                <li>//</li>
                                <li>D-Jhey</li>
                            </ul>
                        </section>

                        <footer>
                            <div class="tickets">
                                $25 Pre Sale Tickets / 18+ Ages / $30 at Door
                            </div>
                            <div class="venue">
                                <h3>Club Sicontis</h3>
                                <p>Level 2, 48 Fort Street, AKL</p>
                                <p><small>www.clubsicontis.com</small></p>
                            </div>
                        </footer>

                    </div>
                </div>
                </Center>
                <Contact target="_blank" to={{pathname: "mailto:aggie.pictures@pm.me"}}>
                    <motion.h2 initial={{  y:-200, transition: { type:'spring', duration: 1.5, delay:1}}}
                     animate={{ y:0,transition: { type:'spring', duration: 1.5, delay:1}}}
                     whileHover={{scale: 1.1}}
                     whileTap={{scale: 0.9}}
                     >
                        contact.
                    </motion.h2>
                </Contact>
                <BLOG to="/photography">
                <motion.h3  whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        photography
                    </motion.h3>
                </BLOG>
                <WORK to="/design" >
                <motion.h3 whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        profile
                    </motion.h3>
                </WORK>
                <BottomBar>
                    <ABOUT to="/architecture">
                    <motion.h3 whileHover={{scale: 1.1}}whileTap={{scale: 0.9}}>
                            architecture
                        </motion.h3>
                    </ABOUT>
                    <SKILLS to="/design">
                    <motion.h3
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    >
                            design
                        </motion.h3>
                    </SKILLS>
                </BottomBar>
            </Container>
        </MainContainer>
    )
}

export default Main