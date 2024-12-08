import styled from "styled-components";
import { BREAKPOINTS } from "../../constants";

export const Button = styled.button`
  display: block;
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.orange};
  width: 100%;
  height: 30px;
  padding: 8px 12px;
  margin: 0 4px;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.3s all;
  box-sizing: border-box;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainBlack};
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  @media (max-width: ${BREAKPOINTS.md}) {
    width: 100%;
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 100%;
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  @media (max-width: ${BREAKPOINTS.md}) {
    width: 10px;
    height: 10px;
  }
`;

export const FilterSelect = styled.select`
  all: unset;
  padding: 8px 12px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.orange};
  background-color: ${({ theme }) => theme.colors.mainBlack};
  color: ${({ theme }) => theme.colors.orange};

  @media (max-width: ${BREAKPOINTS.md}) {
    font-size: 0.9rem;
    margin-top: 10px;
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    box-sizing: border-box;
    width: 250px;
    font-size: 0.8rem;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.mainBlack};
  color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 500px;
  position: relative;

  p {
    text-align: center;
  }

  @media (max-width: ${BREAKPOINTS.md}) {
    padding: 15px;
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    padding: 10px;
    max-width: 100%;
  }
`;

export const StyledButton = styled.button`
  all: unset;
  display: inline-block;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.orange};
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.orange};
  border-radius: 4px;
  text-align: center;
  flex: 1;
  cursor: pointer;
  font-size: 1rem;
  line-height: 40px;
  transition: 0.5s all;

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: ${BREAKPOINTS.md}) {
    font-size: 0.9rem;
    height: 35px;
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    font-size: 0.8rem;
    height: 30px;
  }
`;

export const ImportButtonWrapper = styled.label`
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  flex: 1;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.orange};
  border-radius: 4px;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.orange};
  transition: 0.5s all;

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
  }

  input {
    display: none;
  }

  @media (max-width: ${BREAKPOINTS.md}) {
    font-size: 0.9rem;
    height: 35px;
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    font-size: 0.8rem;
    height: 30px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr 2fr;
  gap: 1px;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  margin: 20px 0;
  border-radius: 4px;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${BREAKPOINTS.md}) {
    display: block;
  }
`;

export const GridRow = styled.div`
  display: contents;

  &:nth-child(odd) > div {
    background-color: ${({ theme }) => theme.colors.gray};
  }

  & > div {
    padding: 10px 15px;
    background-color: ${({ theme }) => theme.colors.lightGray};
    text-align: left;
    font-size: 1rem;
    word-wrap: break-word;
    word-break: break-word;
    white-space: normal;
  }

  @media (max-width: ${BREAKPOINTS.md}) {
    display: flex;
    flex-direction: column;
    gap: 1px;

    & > div {
      padding: 6px 10px;
      font-size: 0.9rem;
    }
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    & > div {
      padding: 6px 10px;
      font-size: 0.8rem;
    }
  }
`;

export const GridActions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-shrink: 0;

  button {
    background-color: ${({ theme }) => theme.colors.lightGray};
    border: none;
    padding: 6px 12px;
    cursor: pointer;
    border-radius: 4px;
    transition: 0.5s all;
    height: 30px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.mainBlack};
    }
  }

  @media (max-width: ${BREAKPOINTS.md}) {
    gap: 5px;
    margin-bottom: 20px;
    gap: 50px;

    button {
      padding: 5px 10px;
      height: 25px;
      width: 50px;
    }
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    button {
      padding: 4px 8px;
      height: 20px;
    }
  }
`;

export const GridHeader = styled.div`
  display: contents;
  background-color: ${({ theme }) => theme.colors.orange};
  font-weight: bold;
  text-align: center;

  & > div {
    padding: 10px 15px;
  }

  @media (max-width: ${BREAKPOINTS.md}) {
    & > div {
      padding: 8px 12px;
    }
    &:nth-last-child(2) {
      margin-bottom: 50px;
    }
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    & > div {
      padding: 6px 10px;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  margin-top: 10px;
  font-size: 1rem;
  gap: 10px;

  @media (max-width: ${BREAKPOINTS.md}) {
    gap: 8px;
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    gap: 5px;
  }
`;

export const TaskTableHeaderWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: end;

  @media (max-width: ${BREAKPOINTS.md}) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    align-items: center;
  }
`;

export const DeleteButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  @media (max-width: ${BREAKPOINTS.md}) {
    flex-direction: column;
    gap: 10px;
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    gap: 8px;
  }
`;
