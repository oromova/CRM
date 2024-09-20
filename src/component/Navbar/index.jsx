import React from 'react'
import { Container, Input, InputWrapper, SearchIcon, Section } from './style';
import Time from './Time';
import GenericSelect from './Select';

export const Navbar = () => {
  return (
    <Container>
      <InputWrapper>
        <SearchIcon />
        <Input placeholder="Search"/>
      </InputWrapper>
      <Section>
        <GenericSelect/>
        <Time/>
      </Section>
    </Container>
  )
}

export default Navbar
