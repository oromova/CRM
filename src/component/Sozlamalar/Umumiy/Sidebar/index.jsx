import React from 'react';
import { Body, Container, Link, Sidebar, Wrapper } from './style';
import Breadcrumb from '../../../Generics/BreadCrumb';
import { umumiy } from '../../../../utils/sozlamalar';
import { Outlet } from 'react-router-dom';

export const UmumiySidebar = () => {
  return (
    <Container>
      <Breadcrumb></Breadcrumb>
      <Wrapper>
        <Sidebar>
          {
            umumiy.map((item) => {
              const { icon: Icon } = item;
              return (
                <Link key={item.path} to={`/sozlamalar/umumiy/${item.path}`}>
                  <Icon className="sub-icon"/>  {item.title}
                </Link>
              );
            })
          }
        </Sidebar>
        <Body>
          <Outlet/>
        </Body>
      </Wrapper>
    </Container>
  );
};

export default UmumiySidebar;