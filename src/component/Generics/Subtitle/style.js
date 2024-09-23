import styled from "styled-components";
import getValue from "../../../hooks/getStyledValue";

export const Container = styled.div`
  display: inherit;
  align-items: inherit;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--primaryColor);
  margin-top: ${({ mt }) => getValue(mt)};
  margin-bottom: ${({ mb }) => getValue(mb)};
  margin-right: ${({ mr }) => getValue(mr)};
  margin-left: ${({ ml }) => getValue(ml)};
  padding-top: ${({ pt }) => getValue(pt)};
  padding-bottom: ${({ pb }) => getValue(pb)};
  padding-right: ${({ pr }) => getValue(pr)};
  padding-left: ${({ pl }) => getValue(pl)};
`;
