import React from "react";
import styled from "styled-components";
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import BlogComponent from "./BlogComponent";
import { Blogs } from '../data/BlogData'


const MainContainer = styled.div`
background-image: url('https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80');
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
height: 100vh;
`
const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width: 100%;
height: auto;
position: relative;
height: 100vh;
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

const BlogPage = () => {
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

export default BlogPage