import React from "react";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import BlogComponent from "./BlogComponent";
import { Designs } from '../data/DesignData'

const MainContainer = styled.div`
background-color: ${props => props.theme.body};
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
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 0vw);
height: 15rem;
`

const Design = () => {
    return (
            <MainContainer>
                <LogoComponent theme='light' />
                <Main>
                <Center>
                    <Grid>
                        {
                            Designs.map(blog => {
                                return <BlogComponent key={blog.id} blog={blog} />
                            })
                        }
                    </Grid>
                </Center>
                </Main>
            </MainContainer>
    )
}

export default Design