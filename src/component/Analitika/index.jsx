import React from 'react';
import { Container, Card, Wrapper } from './style';
import Title from '../Generics/Title';
import Subtitle from '../Generics/Subtitle';


export const Analitika = () => {
  return (
    <Container>
      <Title mb={16}>Analitika</Title>
      <Wrapper gap={24}>
        <Card>1</Card>
        <Card>1</Card>
        <Card>1</Card>
      </Wrapper>
      <Subtitle mt={24} mb={16}>Ijtimoiy tarmoqlar</Subtitle>
      <Wrapper>
        <Card>1</Card>
        <Card>1</Card>
        <Card>1</Card>
      </Wrapper>
    </Container>
  );
};

export default Analitika;