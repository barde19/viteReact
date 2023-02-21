import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { CgMenu, CgClose } from 'react-icons/cg'
import '../index.css';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Nav>
      <div className={openMenu ? 'menuIcon active' : 'menuIcon'}>
        <ul className='navbar-list'>
          <li>
            <NavLink className="navbar-link" to='/' onClick={() => setOpenMenu(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to='/About' onClick={() => setOpenMenu(false)}>About</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to='/Services' onClick={() => setOpenMenu(false)}>Services</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to='/Contact' onClick={() => setOpenMenu(false)}>Contact</NavLink>
          </li>
        </ul>
        <div className='cg-navbar-btn'>
          <CgMenu
            className='mobile-nav-icon'
            name='menu-outline'
            onClick={() => setOpenMenu(true)}
          />
          <CgClose
            className=' close-outline mobile-nav-icon'
            name='close-outline'
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Nav>
  )
}
const Nav = styled.nav`
 .navbar-list {
      display: flex;
      gap: 4.8rem;
      li {
        list-style: none;
        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }
          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.border};
          }
        }
      }
    }
    .cg-navbar-btn{
      display:none;
      .close-outline{
          display:none;
      }
    }
      .cg-navbar-btn[name='close-outline']{
      display:none;
    }
    

    @media (max-width:${({ theme }) => theme.media.mobile}){
      .cg-navbar-btn{
        display:inline-block;
        z-index:999;
        border: ${({ theme }) => theme.colors.black};
      }
      .mobile-nav-icon{
        font-size:4.2rem;
        color:${({ theme }) => theme.colors.black};
      }
      .navbar-list{
        width:100vw;
        height:100vh;
        position:absolute;
        top:0;
        left:0;
        background-color:#fff;
        transform:translateX(100%);
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        visible:hidden;
        opacity:0;
      }
      .active .mobile-nav-icon{
        display:none;
        font-size:4.2rem;
        position:absolute;
        top:3%;
        right:10%;
        z-index:999;
          color: ${({ theme }) => theme.colors.black};
      }
     .active .close-outline{
        display:inline-block;
      }
      .active .navbar-list{
        visiblity:visible;
        opacity:1;
        transform:translateX(0);
        z-index:999;
      }
    }
      
`;
export default Navbar