import styled from "styled-components";
import { BREAKPOINTS } from "../../constants";

export const PresentationText = styled.div`
  width: 600px;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.large};
  margin-top: 20px;
  @media (max-width: ${BREAKPOINTS.xl}) {
    width: 550px;
  }
  @media (max-width: ${BREAKPOINTS.lg}) {
    margin-top: 40px;
    width: 300px;
  }
  @media (max-width: ${BREAKPOINTS.md}) {
    margin-top: 40px;
    width: 250px;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 100%;
  }
`;

export const VideoWrapper = styled.div`
  width: 400px;
  max-height: 700px;
  object-fit: cover;
  @media (max-width: ${BREAKPOINTS.xl}) {
    width: 350px;
  }
  @media (max-width: ${BREAKPOINTS.lg}) {
    max-height: 350px;
    margin-top: 30px;
  }
  @media (max-width: ${BREAKPOINTS.md}) {
    width: 250px;
  }
  @media (max-width: ${BREAKPOINTS.md}) {
    width: 200px;
  }
`;

export const PresentationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  @media (max-width: ${BREAKPOINTS.lg}) {
    align-items: start;
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
  }
`;
