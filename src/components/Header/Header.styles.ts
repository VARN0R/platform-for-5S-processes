import { Link } from "react-router-dom";
import styled from "styled-components";
import { BREAKPOINTS } from "../../constants";

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

export const Nav = styled.nav`
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
  display: flex;
  margin-left: 29px;

  @media (max-width: ${BREAKPOINTS.sm}) {
    font-size: ${(props) => props.theme.fontSizes.extraLarge};
  }
`;
