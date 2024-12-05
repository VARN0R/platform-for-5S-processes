import React from "react";
import {
  HeaderStyled,
  HeaderWrapper,
  LinkStyled,
  Logo,
  Nav,
} from "./Header.styles";
import images from "../../assets/images";
import Container from "../Container/index";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <Container>
        <HeaderWrapper>
          <Logo>
            <Link to="/">
              <img src={images.logo} alt="logo header" />
            </Link>
          </Logo>

          <Nav>
            <LinkStyled to="/tasks">TASKS</LinkStyled>
            <LinkStyled to="/contacts">CONTACTS</LinkStyled>
          </Nav>
        </HeaderWrapper>
      </Container>
    </HeaderStyled>
  );
};
