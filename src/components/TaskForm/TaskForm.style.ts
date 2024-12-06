import styled from "styled-components";
import { BREAKPOINTS } from "../../constants";

export const FormStyled = styled.form`
  width: 600px;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media (max-width: ${BREAKPOINTS.lg}) {
    width: 400px;
  }
  @media (max-width: ${BREAKPOINTS.md}) {
    width: 300px;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 100%;
  }
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  background: ${({ theme }) => theme.colors.mainBlack};
  color: white;
  &::-webkit-calendar-picker-indicator {
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.orange};
    border-radius: 5px;
    transition: 0.3s all;
    &:hover {
      background-color: ${({ theme }) => theme.colors.mainBlack};
    }
  }
`;

export const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 4px;
  font-size: 1rem;
  background: none;
  color: ${({ theme }) => theme.colors.white};
  outline: none;
  option {
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.mainBlack};
    color: white;
    border: none;
    border-radius: 0;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.orange};
  color: white;
  border: 1px solid ${({ theme }) => theme.colors.orange};
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainBlack};
  }
`;

export const ModalButton = styled(Button)`
  width: 250px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.mainBlack};
  padding: 3rem;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 95%;
    padding: 2.5rem 2rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    color: ${({ theme }) => theme.colors.red};
  }
`;
