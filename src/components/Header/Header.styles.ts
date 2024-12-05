import { Link } from "react-router-dom";
import styled from "styled-components";
import { BREAKPOINTS } from "../../constants";
import LinkProps from "../../types/link-props";
import HamburgerProps from "../../types/hamburger-props";

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: ${(props) => props.theme.colors.white};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderStyled = styled.header`
  background: ${(props) => props.theme.colors.mainBlack};
  height: 127px;
  padding: 32px 0;
  @media (max-width: ${BREAKPOINTS.sm}) {
    height: auto;
    padding: 16px 0;
  }
`;

export const Nav = styled.nav<LinkProps>`
  display: flex;
  margin-left: 100px;
  a {
    color: ${(props) => props.theme.colors.white};
    margin-right: 1rem;
    text-decoration: none;
    transition: 0.5s all;
    &:hover {
      color: ${(props) => props.theme.colors.orange};
    }
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    position: absolute;
    z-index: 2;
    padding: 100px 20px;
    top: 0;
    justify-content: start;
    align-items: start;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.mainBlack};
    margin-left: 0;
    left: 0;
    display: ${({ open }) => (open ? "flex" : "none")};
    width: 100%;
  }
`;

export const Logo = styled.div`
  width: 72px;
  height: 72px;
`;

export const LinkStyled = styled(Link)`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.extraLarge};
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  margin-left: 29px;
  width: 100%;
  @media (max-width: ${BREAKPOINTS.sm}) {
    font-size: ${(props) => props.theme.fontSizes.extraLarge};
    margin-left: 0px;
    margin-top: 20px;
    &:after {
      content: "";
      display: block;
      height: 1px;
      width: 100%;
      margin: 10px 0 0 0;
      background-color: ${(props) => props.theme.colors.white};
    }
  }
`;

export const Hamburger = styled.div<HamburgerProps>`
  display: none;
  flex-direction: column;
  cursor: pointer;
  position: absolute;
  z-index: 100;
  top: 37px;
  right: 10px;

  span {
    height: 2px;
    background: ${(props) => props.theme.colors.white};
    margin: 4px 0;
    width: 25px;
    transition: all 0.3s ease;

    &:nth-child(1) {
      transform: ${({ open }) =>
        open ? "rotate(45deg) translateY(14px)" : "rotate(0)"};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ open }) =>
        open ? "rotate(-45deg) translateY(-14px)" : "rotate(0)"};
    }
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    display: flex;
  }
`;
