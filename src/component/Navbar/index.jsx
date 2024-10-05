import React from 'react';
import { Container, SearchIcon, Section } from './style';
import Time from './Time';

import DateTimepicker from './DateTimepicker';
import Input from '../Generics/Input';
import GenericSelect from '../Generics/Select';

export const Navbar = () => {
  const data = [
    { value: 'uzbek', title: 'Uzbek' },
    { value: 'russian', title: 'Russian' },
    { value: 'english', title: 'English' }
  ];
  return (
    <Container>
      <Input
        width={500}
        height={40}
        borderRadius={8}
        iconLeft={<SearchIcon />} />
      <Section>
        <Time />
        <DateTimepicker />
        <GenericSelect label="Language" data={data} />
      </Section>
    </Container>
  );
};

export default Navbar;
