import React from 'react';
import { Arrow, Container } from './style';
import Title from '../Title';
import { useLocation } from 'react-router-dom';
import Subtitle from '../Subtitle'

export const Breadcrumb = () => {
  const location = useLocation();
  
  return (
    <Container title = {location.state?.parent}>
      <Title>{location.state?.parent}</Title>
       {location.state?.child && <Arrow/>}
      <Subtitle>{location.state?.child}</Subtitle>
    </Container>
  );
};
