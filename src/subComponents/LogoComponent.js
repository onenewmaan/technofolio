// home top button
import styled from "styled-components";
import React from "react";
import { darkTheme } from "../components/Themes";

const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body };
font-family: monospace;
position: fixed;
left: 2rem;
top: 2rem;
z-index: 3;
`

const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
            portfolio
        </Logo>
    )
}

export default LogoComponent