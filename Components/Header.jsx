import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
      <MainHeader>

        <p className='logo'><span>Web</span>pulse</p>

        <Navbar />
      </MainHeader>
    </>
  )
}
const MainHeader = styled.header`
padding: 0 4.8rem;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
   .logo{
font-family: 'Audiowide', cursive;
text-transform:uppercase;
font-size:2.5rem;
color:${({ theme }) => theme.colors.border};
border:0.3rem solid ${({ theme }) => theme.colors.black};
padding:0rem 0.2rem;

  }
  span{
    color:${({ theme }) => theme.colors.bg};
    background-color:${({ theme }) => theme.colors.black};
   margin:0 0.3rem 0 -0.2rem;
   padding: 0.2rem 0.4rem 0.1rem 0.2rem;
   font-weight:bold;
 
  }
  html {
  overflow-x: hidden;
}
body {
  overflow-x: hidden;
}
`;

export default Header