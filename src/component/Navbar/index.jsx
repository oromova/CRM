import React from 'react'
import { Container, Input, InputWrapper, SearchIcon, Section } from './style';
import Time from './Time';
import GenericSelect from './Select';
import DateTimepicker from './DateTimepicker';

export const Navbar = () => {
  return (
    <Container>
      <InputWrapper>
        <SearchIcon />
        <Input placeholder="Search"/>
      </InputWrapper>
      <Section>
        <Time/>
        <DateTimepicker/>
        <GenericSelect/>
      </Section>
    </Container>
  )
}

export default Navbar
