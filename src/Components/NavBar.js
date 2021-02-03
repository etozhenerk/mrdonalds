import React from "react";
import styled from "styled-components";
import logoImg from "../image/logo.svg";
import signImg from "../image/sign.svg";

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299b01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;
const ImgSign = styled.img`
`;

const LogIn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  background-color: transparent;
  border: none;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo" />
      <H1>MrDonald's</H1>
    </Logo>
    <LogIn>
      <ImgSign src={signImg} alt="sign" />
      войти
    </LogIn>
  </NavBarStyled>
);
