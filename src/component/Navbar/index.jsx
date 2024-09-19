import React from 'react'
import { Container, Input, InputWrapper, SearchIcon, Section } from './style';

export const Navbar = () => {
  return (
    <Container>
      <InputWrapper>
        <SearchIcon />
        <Input placeholder="Search"/>
      </InputWrapper>
      <Section>

      </Section>
    </Container>
  )
}

export default Navbar
