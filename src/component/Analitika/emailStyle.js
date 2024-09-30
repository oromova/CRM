import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 24px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
`;

export const Info = styled.div`
  display: flex;
  &:hover {
    background: #f0f5ff;
    border-radius: 8px;
  }
`;

export const Section = styled.div`
  display: flex;
  flex: 1;
  justify-content: ${({ end }) => end && "flex-end"};
  align-items: center;
  padding: 12px;
  background: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--secondaryColor);
`;

Info.Img = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 24px;
  border-radius: 50%;
`;

Info.Sms = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 230px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--primaryColor);
`;