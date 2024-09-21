import styled from "styled-components";
import getValue from "../../../hooks/getStyledValue";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  border: 1px solid rgb(240, 240, 240);
  overflow: hidden;
  border-radius: ${({ borderRadius }) => getValue(borderRadius)};
  width: ${({ width }) => getValue(width)};
  height: ${({ height }) => getValue(height)};
  max-width: ${({ width }) => getValue(width)};
`;

export const Input = styled.input`
  outline: none;
  border: 0;
  flex: 1;
  width: ${({ width }) => getValue(width)};
  height: ${({ height }) => getValue(height)};
  max-width: ${({ width }) => getValue(width)};
  font-size: ${({ fontSize }) => getValue(fontSize)};
  font-weight: ${({ fontWeight }) => getValue(fontWeight)};
  line-height: ${({ lineHeight }) => getValue(lineHeight)};
  border-radius: ${({ borderRadius }) => getValue(borderRadius)};
  color: ${({ color }) => (color ? color : "rgb(187, 195, 205)")};

  &::placeholder {
    color: ${({ placeholderStyle }) => ( placeholderStyle?.color ?  placeholderStyle?.color : "rgb(187, 195, 205)")};
    font-size: ${({ placeholderStyle }) => getValue( placeholderStyle?.fontSize )};
    font-weight: ${({ placeholderStyle }) => getValue( placeholderStyle?.fontWeight )};
    line-height: ${({ placeholderStyle }) => getValue( placeholderStyle?.lineHeight )};
  }
`;
