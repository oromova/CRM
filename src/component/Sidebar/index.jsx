import React, { useState } from 'react';
import { Arrow, Body, ChildWrapper, Container, ExitIcon, Logo, LogOut, Menu, MenuItem, Side, Wrapper } from './style';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import { Profile } from './profile';
import sidebar from '../../utils/sidebar';

export const Sidebar = () => {
  const [open, setOpen] = useState([]);

  const navigate = useNavigate();
  const onClickLogo = () => {
    navigate("/");
  };

  const onLogOut = () => {
    navigate("/");
  };

  const onClickParent = (id, children ) => {
    if(!children) navigate(path)
    if (open.includes(id)) {
      let data = open.filter((val) => val !== id);
      setOpen(data);
    } else {
      setOpen([...open, id]);
    }
    console.log(open);

  };

  return (
    <Container>
      <Side>
        <Logo onClick={onClickLogo}>Webbrain CRM</Logo>
        <Profile />
        <Menu>
          {sidebar.map((parent) => {
            const active = open.includes(parent.id);
            const { icon: Icon } = parent;
            return (
              <>
                <MenuItem
                  key={parent.id}
                  onClick={() => onClickParent(parent.id)}
                  to={parent.path }>
                  <MenuItem.Title>
                    <Icon className="icon" />
                    {parent.title}
                  </MenuItem.Title>
                  {parent?.children?.length && < Arrow active={active} />}
                </MenuItem>

                <ChildWrapper active={active}>
                  {parent?.children?.map((child) => {
                    return (
                      <MenuItem key={child?.id} to={child.path}>
                        <MenuItem.Title>
                          {child?.title}
                        </MenuItem.Title>
                      </MenuItem>
                    );
                  })
                  }
                </ChildWrapper>
              </>
            );
          }
          )}
        </Menu>

        <LogOut onClick={onLogOut}> <ExitIcon />Chiqish</LogOut>
      </Side>
      <Body>
        <Navbar />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Body>
    </Container>
  );
};
