import styled from "styled-components";

import { spacing, StyledCaption, ISelectedProps } from "../shared_styles";


export const SuiteButtonWrapper = styled.button`
  border: none;
  background-color: transparent;
  text-align: center;
  height: 80px;
  box-sizing: border-box;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  width: 57px;
  box-sizing: border-box;
`;

export const ButtonPadding = styled.div<ISelectedProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: ${({ selected }) => (selected ? "2px solid #4A72F5" : "none")};
  padding: 1px;
  width: 48px;
`;

export const ButtonLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SuiteButtonText = styled(StyledCaption)<ISelectedProps>`
  color: ${({ selected }) => (selected ? "#4A72F5" : "black")};
  font-weight: ${({ selected }) => (selected ? "600" : "400")};
  margin-top: ${spacing.xs};
`;