import styled from "styled-components";
import getValue from '../../../hooks/getStyledValue';

export const Container = styled.div`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: ${({ type }) => (!type || type === "primary" ? 600 : 400)};
  line-height: 28px;
  text-align: left;
  color: var(--primaryColor);
`;
