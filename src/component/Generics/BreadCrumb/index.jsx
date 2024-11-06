import React from 'react';
import { Arrow, Container } from './style';
import Title from  '../Title';
import { useLocation } from 'react-router-dom';
import Subtitle from '../Subtitle';

export const Breadcrumb = (props) => {
  const location = useLocation();
  return location.pathname !== "/analitika" ? (
    <Container title = {location.state?.parent}>
      <Title> {location.state?.parent} </Title>
       {location.state?.child && <Arrow/>}
      <Subtitle>{location.state?.child} </Subtitle>
      <div style={{display:'flex', marginLeft: 'auto', gap: 16}}>
        {props.children}
      </div>
    </Container>
  ) : null;
};

export default Breadcrumb