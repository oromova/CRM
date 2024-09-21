import styled from "styled-components";
import search from "../../assets/icons/navbar/search.svg?react";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 60px;
  padding: 0 16px 0 24px;
  position: sticky;
  top: 0;
`;

const SearchIcon = styled(search)`
  margin: 0 16px;
`;

// right navbar / time wrapper
const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Timer = styled.div`
  color: ${({ status }) =>
  status ? "rgb(187, 195, 205)" : "var(--primaryColor)"};
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
`;



export { Container,  SearchIcon, Section, Timer };
