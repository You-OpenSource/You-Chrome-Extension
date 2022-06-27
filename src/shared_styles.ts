import styled from "styled-components";

export const StyledCaption = styled.p`
    color: #696B6C;
    font-size: 0.75rem
    font-style: normal;
    line-height: 1.33;
    letter-spacing: -0.08px;
    margin: 0;
`;

export const spacing = {
  xxs: "0.25rem",
  xs: "0.5rem",
  s: "0.625rem",
  sm: "0.75rem",
  sl: "0.875rem",
  md: "1rem",
  ml: "1.25rem",
  lg: "1.5rem",
  xl: "2rem",
  xxl: "3rem",
  xxxl: "3.5rem",
  auto: "auto",
} as const;

export interface ISelectedProps {
  selected: boolean;
}