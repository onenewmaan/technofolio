import React from "react";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import ArchitectureCard from "./ArchitectureCard";
import { Posts } from '../data/ArchitectureData'

const ArtecturePage = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 110vh;
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

const Artecture = () => {
    return (
            <ArtecturePage>
                <LogoComponent theme='light' />
                <Main>
                <Center>
                    <Grid>
                        {
                            Posts.map(blog => {
                                return <ArchitectureCard key={blog.id} blog={blog} />
                            })
                        }
                    </Grid>
                </Center>
                </Main>
            </ArtecturePage>
    )
}

export default Artecture