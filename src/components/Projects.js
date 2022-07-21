import React from "react";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import ProjectsCard from "./ProjectsCard";
import { Posts } from '../data/ProjectsData'

const ProjectsPage = styled.div`
background-color: white;
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

const Projects = () => {
    return (
            <ProjectsPage>
                <LogoComponent theme='light' />
                <Main>
                <Center>
                    <Grid>
                        {
                            Posts.map(blog => {
                                return <ProjectsCard key={blog.id} blog={blog} />
                            })
                        }
                    </Grid>
                </Center>
                </Main>
            </ProjectsPage>
    )
}

export default Projects