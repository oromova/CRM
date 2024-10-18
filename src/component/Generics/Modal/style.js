import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(37, 62, 95, 0.5);
  overflow-y: scroll;
  z-index: 999999;
`
export const Wrapper = styled.div`
  margin: auto;
  margin-top: 78px;
  max-width: 900px;
  min-width: 200px;
  width: fit-content;
  border-radius: 8px;
  padding: 32px 48px;
  /* gap: 16px; */
  background-color: white;
  max-height: 90%;
  gap: 16px;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar{
    display: none;
  }
`
export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 32px;
`