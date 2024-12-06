import styled from "styled-components";
import { BREAKPOINTS } from "../../constants";

export const TitleStyled = styled.div`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.massive};
  text-align: left;
  color: ${(props) => props.theme.colors.white};
  width: 690px;
  span {
    color: ${(props) => props.theme.colors.orange};
  }

  @media (max-width: ${BREAKPOINTS.lg}) {
    margin-top: 30px;
    font-size: ${(props) => props.theme.fontSizes.extraLarge3};
    width: 100%;
  }
`;
