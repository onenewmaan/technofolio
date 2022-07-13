import React from "react";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import BlogComponent from "./BlogComponent";
import { Blogs } from '../data/BlogData'
import { Posts } from '../data/ArchitectureData'



const MainContainer = styled.div`
height: 100vh;
width: 100vw;
margin: 0;
background-color: #639;
background-size: 100px 100px;
background-position: 0 0;
background-image: linear-gradient(45deg, #000, #000 0.5%, #ffd700 0.5%, #ffd700 7.6%, #000 7.6%, #000 8.642857143%, #ff8c00 8.642857143%, #ff8c00 15.64285714%, #000 15.64285714%, #000 16.88571429%, #dc143c 16.88571429%, #dc143c 23.84285714%, #000 23.84285714%, #000 25%, transparent 25%), linear-gradient(-45deg, #000, #000 0.5%, #ffd700 0.5%, #ffd700 7.6%, #000 7.6%, #000 8.642857143%, #ff8c00 8.642857143%, #ff8c00 15.64285714%, #000 15.64285714%, #000 16.88571429%, #dc143c 16.88571429%, #dc143c 23.84285714%, #000 23.84285714%, #000 25%, transparent 25%), linear-gradient(45deg, transparent 73.85714286%, #000 73.85714286%, #000 75%, transparent 75%), linear-gradient(-45deg, transparent 73.85714286%, #000 73.85714286%, #000 75%, transparent 75%), linear-gradient(45deg, transparent 66.85714286%, #dc143c 66.85714286%, #dc143c 73.85714286%, transparent 73.85714286%), linear-gradient(-45deg, transparent 66.85714286%, #dc143c 66.85714286%, #dc143c 73.85714286%, transparent 73.85714286%), linear-gradient(45deg, transparent 65.71428571%, #000 65.71428571%, #000 66.85714286%, transparent 66.85714286%), linear-gradient(-45deg, transparent 65.71428571%, #000 65.71428571%, #000 66.85714286%, transparent 66.85714286%), linear-gradient(45deg, transparent 58.71428571%, #ff8c00 58.71428571%, #ff8c00 65.71428571%, transparent 65.71428571%), linear-gradient(-45deg, transparent 58.71428571%, #ff8c00 58.71428571%, #ff8c00 65.71428571%, transparent 65.71428571%), linear-gradient(45deg, transparent 57.57142857%, #000 57.57142857%, #000 58.71428571%, transparent 58.71428571%), linear-gradient(-45deg, transparent 57.57142857%, #000 57.57142857%, #000 58.71428571%, transparent 58.71428571%), linear-gradient(45deg, transparent 50.57142857%, #ffd700 50.57142857%, #ffd700 57.57142857%, transparent 57.57142857%), linear-gradient(-45deg, transparent 50.57142857%, #ffd700 50.57142857%, #ffd700 57.57142857%, transparent 57.57142857%), linear-gradient(45deg, transparent 49.42857143%, #000 49.42857143%, #000 50.57142857%, transparent 50.57142857%), linear-gradient(-45deg, transparent 49.42857143%, #000 49.42857143%, #000 50.57142857%, transparent 50.57142857%), linear-gradient(45deg, transparent 42.42857143%, #228b22 42.42857143%, #228b22 49.42857143%, transparent 49.42857143%), linear-gradient(-45deg, transparent 42.42857143%, #228b22 42.42857143%, #228b22 49.42857143%, transparent 49.42857143%), linear-gradient(45deg, transparent 41.28571429%, #000 41.28571429%, #000 42.42857143%, transparent 42.42857143%), linear-gradient(-45deg, transparent 41.28571429%, #000 41.28571429%, #000 42.42857143%, transparent 42.42857143%), linear-gradient(45deg, transparent 34.28571429%, #4169e1 34.28571429%, #4169e1 41.28571429%, transparent 41.28571429%), linear-gradient(-45deg, transparent 34.28571429%, #4169e1 34.28571429%, #4169e1 41.28571429%, transparent 41.28571429%), linear-gradient(45deg, transparent 33.142857143%, #000 33.142857143%, #000 34.28571429%, transparent 34.28571429%), linear-gradient(-45deg, transparent 33.142857143%, #000 33.142857143%, #000 34.28571429%, transparent 34.28571429%);

`
const Container = styled.div`
width: 100%;
height: auto;
position: fixed;
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
height: 15rem;
`

const Design = () => {
    return (
        <MainContainer>
            <Container>
                <LogoComponent />
                <SocialIcons />
                <Center>
                    <Grid>
                        {
                            Posts.map(blog => {
                                return <BlogComponent key={blog.id} blog={blog} />
                            })
                        }
                    </Grid>
                </Center>
            </Container>
        </MainContainer>
    )
}

export default Design