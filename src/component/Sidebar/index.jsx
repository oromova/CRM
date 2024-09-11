import React from 'react'
import { Body, Container, Side, Wrapper } from './style';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

export const Sidebar = () => {
  return (
    <Container>
      <Side>Sidebar</Side>
      <Body>
        <Navbar/>
        <Wrapper>
          <Outlet/>
        </Wrapper>
      </Body>
    </Container>
  )
}
