import styled from "styled-components";

import { spacing } from "./shared_styles";

export const SendIcon = styled.img``;

export const SummarizeButtonIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #8B8E8F;
  width: 20px;
  height: 20px;

  margin-left: ${spacing.xs};

  border-radius: 50%;
`;

export const SummarizeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0.25rem 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: -0.15px;
  color: #2e2f30;

  margin: ${spacing.s};
  white-space: nowrap;
  font-weight: 600;
  font-size: 14px;

  background: #dcdcdf;
  border: unset;
  border-radius: 24px;
`;

export const App = styled.div`
  text-align: center;
  height: 100%;

  > iframe {
    border: unset;
    display: block;
    box-sizing: border-box;
  }
`;

export const AlternativeWrapperRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  bottom: 1.75rem;

  overflow-x: auto;

  position: absolute;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
    height: 0 !important;
    width: 0 !important;
    -webkit-appearance: none;
  }

  scrollbar-width: none; /* Firefox */
`;

export const SeparationText = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 13px;

  letter-spacing: -0.097px;
  text-decoration: underline;
`;

export const SeparatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  height: 28px;

  cursor: pointer;

  background: #fafafa;

  position: absolute;
  width: 100%;
`;
