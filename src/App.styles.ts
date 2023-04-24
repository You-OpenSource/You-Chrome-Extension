import styled, { keyframes } from "styled-components";

export const LoadingImage = styled.img`
  width: 105px;
`;

const BLINKING_DOTS = keyframes`
  50% { color: transparent }
`;

export const LoadingComponent = styled.div`
  font-size: 1rem;
  text-align: center;
  .loader__dot {
    font-size: 1.25rem;
    font-weight: bold;
    animation: 1s ${BLINKING_DOTS} infinite;
  }
  .loader__dot:nth-child(2) {
    animation-delay: 250ms;
  }
  .loader__dot:nth-child(3) {
    animation-delay: 500ms;
  }
`;

export const EmbedContainer = styled.div`
  height: 100%;
  margin-bottom: 1rem;
`;

export const Embed = styled.iframe`
  width: 100%;
  border: none;
`;

export const CloseIcon = styled.img`
  position: absolute;
  cursor: pointer;
  top: 6px;
  right: 1.5rem;
  width: 10px;
  height: 10px;
  padding: 4px;
  border-radius: 100px;
  background-color: #f7f7fc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingContainer = styled.div<{
  height?: number;
}>`
  height: ${({ height }) => height}px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
`;
