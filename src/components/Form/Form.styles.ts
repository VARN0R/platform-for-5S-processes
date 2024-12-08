import styled, { css } from "styled-components";
import { BREAKPOINTS } from "../../constants";
import FormFieldsProps from "../../types/form-errors";

export const FormStyled = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
  @media (max-width: ${BREAKPOINTS.xl}) {
    margin-top: 30px;
  }
  @media (max-width: ${BREAKPOINTS.md}) {
    width: 100%;
  }
`;

const sharedStyles = css<FormFieldsProps>`
  font-size: ${(props) => props.theme.fontSizes.large};
  margin-bottom: 1rem;
  padding: 0.75rem;
  border: none;
  border-bottom: 1px solid
    ${({ $isError, theme }) =>
      $isError ? theme.colors.red : theme.colors.lightGray};
  border-radius: 4px;
  outline: none;
  background: ${({ theme }) => theme.colors.mainBlack};
  color: ${({ theme }) => theme.colors.white};
  caret-color: ${({ theme }) => theme.colors.white};
  transition: 0.5s all;

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightGray};
    transition: 0.5s all;
  }

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};

    &::placeholder {
      color: transparent;
    }
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    font-size: ${(props) => props.theme.fontSizes.mediumSmall};
  }
`;

export const Input = styled.input<FormFieldsProps>`
  ${sharedStyles}
`;

export const Textarea = styled.textarea<FormFieldsProps>`
  ${sharedStyles}
  resize: none;
`;

export const Button = styled.button`
  all: unset;
  font-size: ${(props) => props.theme.fontSizes.large};
  margin-bottom: 1rem;
  padding: 0.75rem;
  outline: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.orange};
  color: white;
  width: 250px;
  box-shadow: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.orange};
  cursor: pointer;
  border-radius: 45px;
  transition: 0.3s all;

  &:hover {
    opacity: 0.8;
    background-color: ${({ theme }) => theme.colors.mainBlack};
  }
  @media (max-width: ${BREAKPOINTS.md}) {
    margin: 0 auto;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 200px;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: ${(props) => props.theme.fontSizes.large};
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  text-align: left;
  font-weight: 700;
  @media (max-width: ${BREAKPOINTS.sm}) {
    font-size: ${(props) => props.theme.fontSizes.mediumSmall};
  }
`;

export const FormDescr = styled.div`
  width: 600px;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.large};
  margin-top: 20px;
  @media (max-width: ${BREAKPOINTS.xl}) {
    width: 70%;
  }
  @media (max-width: ${BREAKPOINTS.lg}) {
    margin-top: 40px;
    width: 100%;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    font-size: ${(props) => props.theme.fontSizes.mediumSmall};
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 30px 0;
  @media (max-width: ${BREAKPOINTS.xl}) {
    flex-direction: column;
  }
  @media (max-width: ${BREAKPOINTS.lg}) {
    justify-content: space-around;
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
  }
`;

Input.shouldForwardProp = (prop) => prop !== "isError";
Textarea.shouldForwardProp = (prop) => prop !== "isError";
