import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  border: 1px solid rgb(240, 240, 240);
  overflow: hidden;
  border-radius: ${({ borderRadius }) => typeof borderRadius === "string" ? borderRadius:`${borderRadius}px`};
  width: ${({ width }) => typeof width === "string" ? width:`${width}px`};
  height: ${({ height }) => typeof width === "string" ? height:`${height}px`};
  max-width: ${({ width }) => typeof width === "string" ? width:`${width}px`};
`;

export const Input = styled.input`
  outline: none;
  border: 0;
  flex: 1;
  width: ${({ width }) => typeof width === "string" ? width:`${width}px`};
  height: ${({ height }) => typeof width === "string" ? height:`${height}px`};
  max-width: ${({ width }) => typeof width === "string" ? width:`${width}px`};
  font-size: ${({ fontSize }) => typeof fontSize === "string" ? fontSize:`${fontSize}px`};
  font-weight: ${({ fontWeight }) => typeof fontWeight === "string" ? fontWeight:`${fontWeight}px`};
  line-height: ${({ lineHeight }) => typeof lineHeight === "string" ? lineHeight:`${lineHeight}px`};
  border-radius: ${({ borderRadius }) => typeof borderRadius === "string" ? borderRadius:`${borderRadius}px`};
  color: ${({color}) => color? color: 'rgb(187, 195, 205)'};
  &::placeholder {
    color: ${({color}) => color? color: 'rgb(187, 195, 205)'};
    font-size: ${({ placeholderStyle }) => typeof placeholderStyle?.fontSize === "string" ? placeholderStyle?.fontSize :`${placeholderStyle?.fontSize}px`};
    font-weight: ${({ placeholderStyle }) => typeof placeholderStyle?.fontWeight === "string" ? placeholderStyle?.fontWeight:`${placeholderStyle?.fontWeight}px`};
    line-height: ${({ placeholderStyle }) => typeof placeholderStyle?.lineHeight === "string" ? placeholderStyle?.lineHeight:`${placeholderStyle?.lineHeight}px`};
  } 
`;
