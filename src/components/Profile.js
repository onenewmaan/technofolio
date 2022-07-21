import React from "react";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";

const MainContainer = styled.div`
background-color: white;
width: 100vw;
height: 100%;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`
const Main = styled.div`
padding: 2rem;
top: 150px;
width: 99vw;
height: 800px;
z-index: 3;
line-height: 1.5;
cursor: pointer;
font-family: candara;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 1rem;
`


const Profile = () => {
    return (
            <MainContainer>
                <LogoComponent theme='light' />
                <Main>
                <Center>
                <div className="spread">
                    <div className="spread__left">
                    </div>
                    <div className="spread__right">
                        <div className="title" style={{'paddingTop':'20px'}}>
                            <h1 className="large"><span class="tiny">BUILDING</span> ROCK SOLID <span class="tiny">SOLUTIONS</span></h1>
                            <h1 className="small">
                            No resistance can drop your potential ϟ
                            </h1>
                        </div>
                        <div className="content">
                        <div className="fr" lang="fr">
                            
                            <p>
                            The developed competence in fields stretching from electrical circuits, 
                            automation, data science to computer networks and more allows me to conduct lab experiments with various IoT devices, 
                            electronics, software tools as well as collect, parse, visualize and analyze data. 
                            </p>
                            
                        </div>
                        <div className="en" lang="en">
                        <p>Apart from being 
                            a SCADA System Integration Engineer, I'm also pursuing personal projects in network security 
                            and data science.</p>
                            <p>
                            A never-ending search for perfection leads us to a stage of maturity that makes us see with clarity solutions where others still see problems.
                            </p>
                        </div>
                        </div>
                        <div className="spread__page-bottom">
                        <i className="fas fa-bicycle fa-4x"></i>
                        <p>nowiczenko ＠ pm.me</p>
                        <div className="num">⌨</div>
                        </div>
                    </div>
                    </div>
                </Center>
                </Main>
            </MainContainer>
    )
}

export default Profile