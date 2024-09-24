import styled from "styled-components";
import getValue from "../../../hooks/getStyledValue";

export const Container = styled.div`
  display: flex;
  align-items: inherit;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 24px;
  color: ${({ color }) => (color ? color : "var(--primaryColor)")};
  font-size: ${({size}) => (size ? getValue(size) : "16px")};
  margin-top: ${({ mt }) => getValue(mt)};
  margin-bottom: ${({ mb }) => getValue(mb)};
  margin-right: ${({ mr }) => getValue(mr)};
  margin-left: ${({ ml }) => getValue(ml)};
  padding-top: ${({ pt }) => getValue(pt)};
  padding-bottom: ${({ pb }) => getValue(pb)};
  padding-right: ${({ pr }) => getValue(pr)};
  padding-left: ${({ pl }) => getValue(pl)};
`;

export const Counter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  width: 28px;
  height: 28px;
  background: #1890ff;
  border-radius: 50%;
  color: white;
  margin-left: 8px;
`;
