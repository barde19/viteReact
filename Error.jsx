import React from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <img src="../Images/error.png" alt="error" />
      <NavLink to="/">
        <Button className="btn"> Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 
  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
  img{
    width:70rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}){
      img{
    width:50rem;
  }
  }
`;

export default Error;