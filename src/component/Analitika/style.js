import styled from "styled-components";
import getValue from "../../hooks/getStyledValue";

export const Container = styled.div`
`
export const Wrapper = styled.div`
  display: flex;
  gap: ${({ gap }) => getValue(gap, "16px")};
  width: 100%;
`;
export const Card = styled.div`
  display: flex;
  flex: 1;
  border: 1px solid red;
`;
