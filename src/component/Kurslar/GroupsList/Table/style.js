import styled from "styled-components";
import edit from "../../../../assets/icons/lids/edit.svg?react";
import del from "../../../../assets/icons/lids/delete.svg?react";

export const Edit = styled(edit)`
  padding: 4px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Delete = styled(del)`
  padding: 4px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Title = styled.div`
  display: flex;
  justify-content: ${({ center }) => center && "center"};
  font-family: Montserrat;
  font-weight: 500;
  line-height: 24px;
  color: ${({ color }) => (color ? color : "#253e5f")};
  font-size: ${({ size }) => (size ? `${size}px` : "16px")};
  white-space: nowrap;
`;

export const Status = styled.div`
  color: ${({ active }) => (active ? "#52C41A" : "#FAAD14")};
  font-family: Montserrat;
  font-size: ${({ size }) => (size ? `${size}px` : "16px")};
  
  &::before {
    display: inline-block;
    margin-right: 8px;
    content: " ";
    width: 8px;
    height: 8px;
    background-color: ${({ active }) => (active ? "#52C41A" : "#FAAD14")};
    border-radius: 50%;
  }
`;

export const TimelineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ time }) => (time ? "#91D5FF" : "#1890FF")};
  height: 28px;
  max-width: 300px;
  width: 100%;
  padding: 6px 12px;
  gap: 8px;
  border-radius: 16px;
  color: white;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;
