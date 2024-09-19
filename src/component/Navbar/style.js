import styled from "styled-components";
import search from '../../assets/icons/navbar/search.svg?react'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 60px;
  padding: 0 16px 0 24px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 500px;
  width: fit-content;
  border-radius: 8px;
  height: 40px;
  border: 1px solid rgb(240, 240, 240);
`;

const Input = styled.input`
  flex: 1;
  max-width: 500px;
  width: 100%;
  outline: none;
  border: 0;
  height: 36px;
  font-weight: 500;
  font-size: 14px;
  border-radius: 8px;
  line-height: 20px;
  color: rgb(187, 195, 205);
  &::placeholder{
    color: rgb(187, 195, 205);
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
`;

const SearchIcon = styled(search)`
  margin: 0 16px;
`

// right navbar / time wrapper
const Section = styled.div`
  display: flex;
`

const Timer = styled.div`
   &::placeholder{
    color: rgb(187, 195, 205);
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
`


export { 
  Container, 
  InputWrapper,
  Input, 
  SearchIcon,
  Section
};
