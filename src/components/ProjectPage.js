import React from "react";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import BlogComponent from "./BlogComponent";
import { Blogs } from '../data/BlogData'


const MainContainer = styled.div`
background-image: url('img/project.png');
background-repeat: round;
height: 100vh;
`
const Container = styled.div`
width: 100%;
height: auto;
position: relative;
height: 110vh;
`


const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`

const ProjectPage = () => {
    return (
        <MainContainer>
            <Container>
                <LogoComponent />
                <SocialIcons />
                <Center>
                    <Grid>
                        {
                            Blogs.map(blog => {
                                return <BlogComponent key={blog.id} blog={blog} />
                            })
                        }
                    </Grid>
                </Center>
            </Container>
        </MainContainer>
    )
}

export default ProjectPage