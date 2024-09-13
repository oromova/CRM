import styled from "styled-components";
import arrow from "../../assets/icons/sidebar/arrowRight.svg?react";
import exit from "../../assets/icons/sidebar/edit.svg?react"
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 280px;
  max-width: 280px;
  min-width: 280px;
  background-color: white;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const Body = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  border: 2px solid blue;
  margin: 16px;
  background-color: white;
`;

const Logo = styled.div`
  font-weight: 600;
  size: 20px;
  line-height: 28px;
  color: rgba(24, 144, 255, 1);
  padding: 16px 24px;
  border-bottom: 1px solid rgb(248, 250, 252, 1);
  cursor: pointer;
  background-color: white;
`;

const LogOut = styled(Logo)`
  display: flex;
  align-items: center;
  margin-top: auto;
  position: sticky;
  bottom: 0;
  border-top: 1px solid rgb(248, 250, 252, 1);
  border-bottom: 0;
`;

// PROFILE
const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 23px 24px 32px 24px;
`;

ProfileContainer.Image = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 16px;
`;

ProfileContainer.Name = styled.div`
  width: 168px;
  size: 14px;
  font-weight: 600;
  line-height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--primaryColor);
`;

ProfileContainer.Email = styled.div`
  width: 168px;
  size: 12px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--secondaryColor);
`;

//Sidebar MENU

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;
const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding-right: 24px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: rgb(248, 250, 252, 1);
    color: var(--activeColor);
    & path {
      fill: var(--activeColor);
    }
  }
`;

MenuItem.Title = styled.div`
  display: flex;
  flex: 1;
  size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 12px 0 12px 24px;
  color: var(--primaryColor);
  .icon {
    margin-right: 16px;
  }
  &:hover {
    color: var(--activeColor);
  }
`;

const Arrow = styled(arrow)`
  display: flex;
  align-items: center;
  margin-left: auto;
  transform: ${({active}) => active && `rotate(90deg)`};
  transition: all 0.1s;
`

const ChildWrapper = styled.div`
  margin-left: 35px;
  height: ${({active}) => (active ? "auto" : "0px")};
  overflow: hidden;
`

const ExitIcon = styled(exit)`
  margin-right: 16px;
`

export {
  Container,
  Side,
  Body,
  Wrapper,
  Logo,
  LogOut,
  ProfileContainer,
  Menu,
  MenuItem,
  Arrow,
  ChildWrapper,
  ExitIcon,
};
