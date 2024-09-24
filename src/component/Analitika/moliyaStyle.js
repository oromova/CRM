import styled from "styled-components";
import arrowLeft from "../../assets/icons/moliya/iconLeft.svg?react";
import arrowRight from "../../assets/icons/moliya/iconRight.svg?react";

export const Wrapper = styled.div`
  padding: 24px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Fragment = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ArrowIcon = styled(arrowLeft)`
  transform: ${({ right }) => right && "rotate(180deg)"};
  cursor: pointer;
  &:active {
    & path {
      fill: var(--primaryColor)
    }
  }
`;
