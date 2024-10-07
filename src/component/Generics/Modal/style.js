import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(37, 62, 95, 0.5);
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
`

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  gap: 16px;
  margin-top: 24px;
`