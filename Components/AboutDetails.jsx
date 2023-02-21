import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components';
import TeamData from './TeamData';
import { useState } from 'react';
import { AiFillLinkedin, AiFillTwitterSquare, AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";
import { Button } from '../Styles/Button';
const AboutDetails = () => {
    const [Details, setDetails] = useState(TeamData);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 998 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 998, min: 768 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        }
    };
    return (
        <Wrapper>
            <h2 className='common-heading'>WHO  ARE WE</h2>


            <p className='about-para'>Web Pulse is a group of software engineers, creative designers, and technology consultants coming together to deliver marvelous software products to our clients. besides software development, we are the pioneers in Mobile application development, Web development, Graphic design, Digital marketing and SEO service.</p>

            <h2 className='common-heading team'>OUR TEAM</h2>

            <Carousel className='Carousel' infiniteLoop={true} autoPlay={true} responsive={responsive} autoPlaySpeed={1000} removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}>
                {Details.map((details) => {
                    return (
                        <div key={details.id} className='profile-card'>
                            <div className='profile-pic'>
                                <img src={details.Image} alt='profile' />
                            </div>
                            <div className='profile-details'>
                                <h6 className='profile-name'>{details.Name}</h6>
                                <p className='Description'>{details.position}</p>
                                <div className='social-details'><AiFillLinkedin /><AiFillTwitterSquare /><AiFillFacebook /><AiOutlineInstagram /></div>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </Wrapper>
    )
}
const Wrapper = styled.section`
${'' /* background-color:cyan; */}
width:100%;
margin:0rem auto;
.about-para{
    text-align:center;
    font-size:1.8rem;
    font-family: 'Jost', sans-serif;
    padding:0 10rem;
    margin:-3rem 0 0 0;
    letter-spacing:0.2rem;
}
.Carousel{
   margin:2rem auto; 
   width:70%;
   height:28rem;
   ${'' /* background-color:pink; */}
}
.team{
      margin:3rem 0 0 0;  
}
.profile-card{
    width:20rem;
    height:auto;
    background-color:#ffffff;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   margin:0 0 0 0.5rem;
   box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
}
.profile-pic img{
    width:10rem;
    height:10rem;
    margin:2rem 0 0 0;
    border-radius:50%;
}
.profile-details{
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center; 
}
.profile-name{
    margin:0.5rem 0 0 0;
    font-size:1.5rem;
    padding:0.5rem 0 0.2rem 0 ; 
}
.Description{
    text-align:center;
     font-size:1.5rem;
      padding:0.5rem 0 0.5rem 0 ; 
}
.social-details{
      display:flex;
  gap:1.5rem;
  font-size:3rem;
  padding:1rem 0 3rem 0;
  color:${({ theme }) => theme.colors.border};
  cursor: pointer;
}
@media (max-width: ${({ theme }) => theme.media.mobile}){
    .about-para{
        text-align:justify;
        font-size:2.5rem;
        padding : 0 6rem;
    }
    .Carousel{
   width:50%;
}
.profile-card{
    margin: 0 auto;
}
}
`;
export default AboutDetails