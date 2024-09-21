import React from 'react';
import { Container, SearchIcon, Section } from './style';
import Time from './Time';
import GenericSelect from './Select';
import DateTimepicker from './DateTimepicker';
import Input from '../Generics/Input';

export const Navbar = () => {
  return (
    <Container>
      {/* <InputWrapper>
        <SearchIcon />
        <Input placeholder="Search"/>
      </InputWrapper> */}
      <Input 
      width={500} 
      height={40} 
      borderRadius={8} 
      iconLeft={<SearchIcon />} />
      <Section>
        <Time />
        <DateTimepicker />
        <GenericSelect />
      </Section>
    </Container>
  );
};

export default Navbar;
