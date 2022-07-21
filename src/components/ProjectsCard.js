import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Box = styled(NavLink)`
width: 45vw;
text-decoration: none;
height: 40rem;
padding: 1rem;
color: ${props => props.theme.text};
backdrop-filter: blur(2px);
cursor: pointer;
display: flex;
flex-direction: column;
z-index: 5;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    transition: all 0.3s ease;
}
`

const Image = styled.div`
background-image: ${props => `url(${props.img})`};
width: 100%;
height: 60%;
background-size: cover;
border: 1px solid transparent;
background-position: center center;
${Box}:hover&{
    border: 1px solid ${props => props.theme.body};
}
`

const Title = styled.h3`
color: inherit;
padding: 0.5rem 0;
padding-top: 1rem;
font-family: monospace;
font-weight: 700;
border-bottom: 1px solid ${props => props.theme.text};
${Box}:hover&{
    border: 1px solid ${props => props.theme.body};
}
`
const HashTags = styled.div`
padding: 0.5rem 0;
`
const Tag = styled.span`
padding-right: 0.5 rem;
`
const Date = styled.span`
padding: 0.5rem 0;
`
//<Box target="_blank" to={{pathname: link}}>
const ProjectsCard = (props) => {
    const {name, tags, date, imgSrc, link } = props.blog;
    return (
        <Box target="_blank" to={{pathname: link}}>
            <Image img={imgSrc} />
            <Title>
                {name}
            </Title>
            <HashTags>
                {
                    tags.map((t, id) => {
                        return <Tag key={id}> #{t} </Tag>
                    })
                }
            </HashTags>
            <Date>
                {date}
            </Date>
        </Box>
    )
}

export default ProjectsCard