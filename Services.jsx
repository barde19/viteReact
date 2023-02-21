import React from "react";
import styled from "styled-components";
import { useState } from "react";

import { Button } from "./styles/Button";
import Data from './Components/Data'


const Services = () => {
  const [Details, setDetails] = useState(Data);
  return (
    <Wrapper className="section">
      <h2 className="common-heading">OUR SERVICES</h2>
      <div className="container grid grid-three-column">
        {Details.map((details) => {
          return (
            <div key={details.id} className="card">
              <figure>
                <img src={details.Image} alt={name} />
              </figure>
              <div className="card-data">
                <h3>{details.Title}</h3>
                <p>{details.Desc}</p>

                <Button className="btn">Read More</Button>

              </div>
            </div>
          )
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  margin : 0 auto;
  
  .container {
    max-width: 108rem;
  }
  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }
    h3 {
      margin: 0.5rem 0;
      font-weight:300;
      font-size: 2.1rem;
        font-family: 'Jost', sans-serif;
       letter-spacing:0.2rem;
    }
     p{
         font-family: 'Jost', sans-serif;
        text-align:justify;
        font-size:1.3rem;
       }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.2rem solid ${({ theme }) => theme.colors.border};;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.colors.border};;
      font-size: 1.4rem;
      font-weight:bold;
      &:hover {
        background-color: ${({ theme }) => theme.colors.border};;
        color: #fff;
      }
    }
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 18rem;
      transition: all 0.2s linear;
    }
  }
   html {
  overflow-x: hidden;
}
body {
  overflow-x: hidden;
}
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
    .container{
      width:93%;
    }
   
  figure img{
    width:100%;
    height:20rem;
  }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  .card  h3{
  font-size:3rem;
  font-weight:bold;
    }
     .card  p{
  font-size:2rem;
    }
  }
`;

export default Services;