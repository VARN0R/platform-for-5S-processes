import React, { useState } from "react";
import {
  Hamburger,
  HeaderStyled,
  HeaderWrapper,
  LinkStyled,
  Logo,
  Nav,
} from "./Header.styles";
import images from "../../assets/images";
import Container from "../Container/index";
import { Link, useLocation } from "react-router-dom";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  return (
    <HeaderStyled>
      <Container>
        <HeaderWrapper>
          <Logo>
            <Link to="/">
              <img src={images.logo} alt="logo header" />
            </Link>
          </Logo>
          <Hamburger open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
          <Nav open={menuOpen}>
            <LinkStyled
              to="/tasks"
              className={location.pathname.includes("/tasks") ? "active" : ""}
            >
              TASKS
            </LinkStyled>
            <LinkStyled
              to="/contacts"
              className={
                location.pathname.includes("/contacts") ? "active" : ""
              }
            >
              CONTACTS
            </LinkStyled>
          </Nav>
        </HeaderWrapper>
      </Container>
    </HeaderStyled>
  );
};
