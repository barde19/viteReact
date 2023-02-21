import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../Styles/Button';
import { useGlobalContext } from '../Context';
const HeroSection = () => {
  const { name, image, nameone } = useGlobalContext()
  return (

    <Wrapper>
      <div className='container grid grid-two-column'>
        <div className='section-hero-data'>
          <p className='hero-top-data'> We make websites come alive</p>
          <h1 className='hero-heading'>{name}</h1>
          <p className='hero-para'> Web Pulse experience and with the latest design software, we are confident that we can provide you with a high-quality website</p>
          <Button className='btn hireme-btn'>
            <NavLink to='/Contact'>Contact Us</NavLink>
          </Button>
        </div>

        <div className='section-hero-image'>
          <picture>
            <img src={image} alt='heroImage' className='hero-img' />
          </picture>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
padding: 9rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color:'${({ theme }) => theme.colors.bg}';
  }
  .btn {
    max-width: 16rem;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.black};
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 5.4rem;
    color:${({ theme }) => theme.colors.border};
  }
  .hero-para {
   font-family: 'Signika Negative', sans-serif;
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    font-size:1.4rem;
    letter-spacing:0.1rem;
      color: ${({ theme }) => theme.colors.text};
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 100%;
  }
 
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
    .hero-para{
      font-size:2rem;
      text-align:justify;
    }
  }
`;
export default HeroSection