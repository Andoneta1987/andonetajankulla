import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
        <Logo className="logo"><span><i>A.J</i></span></Logo>  
      <menu>
        
      <Link className="nav-link" to="/">
            <Menu>Home</Menu>
          </Link>   
          <Link className="nav-link" to="/Hero">
            <Menu>About</Menu>
          </Link>     
          <Link className="nav-link" to="/blog">
            <Menu>Comments</Menu>
          </Link>   
      </menu>            
    </Wrapper>
  )
}

export default Navbar
const Wrapper=styled.div`
display:flex;
background-color:#000;
justify-content:space-between;
position:sticky;
padding:1rem;
`;
const Logo=styled.h1`
font-size:4rem;
color:blue;
background-color:transparent;
border-radius:40rem;
font:italic;
position:center;
justify-content:center;
`;
const Menu=styled.a`
color:white;
padding:1rem;
text-decoration:none;
cursor:pointer;
`;


