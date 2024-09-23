import styled from "styled-components";
import arrow from "../../assets/icons/sidebar/arrowRight.svg?react";
import exit from "../../assets/icons/sidebar/edit.svg?react";
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
  overflow-y: scroll;
  /* overflow: hidden; */
  height: 100vh;
`;

const Wrapper = styled.div`
  margin: 16px;
  background-color: white;
  border-radius: 8px;
`;

const Logo = styled.div`
  position: sticky;
  top: 0;
  font-weight: 600;
  size: 20px;
  line-height: 28px;
  color: rgba(24, 144, 255, 1);
  padding: 16px 24px;
  border-bottom: 1px solid rgb(248, 250, 252, 1);
  cursor: pointer;
  background-color: white;
  z-index: 999;
`;

const LogOut = styled(Logo)`
  display: flex;
  align-items: center;
  margin-top: auto;
  width: 100%;
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
  &:hover {
    cursor: pointer;
    background-color: rgba(248, 250, 252, 1);
  }
  padding-right: 24px;
  text-decoration: none;
  background-color: ${({ active }) =>
    active === "true" ? `rgba(248, 250, 252, 1)` : `inherit`};
  color: ${({ active }) =>
    active === "true" ? `var(--activeColor)` : `var(--primaryColor)`};
`;

MenuItem.Title = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 12px 0 12px 24px;

  &:hover {
    color: var(--activeColor);
    & path {
      fill: var(--activeColor);
    }
  }
  & path {
    fill: ${({ active }) => active === "true" && "var(--activeColor)"};
  }
  .icon {
    margin-right: 16px;
  }
`;

const Arrow = styled(arrow)`
  display: flex;
  align-items: center;
  margin-left: auto;
  transition: all 0.1s;
  transform: ${({ active }) => active === "true" && `rotate(90deg)`};
`;

const ChildWrapper = styled.div`
  margin-left: 35px;
  height: ${({ active }) => (active === "true" ? "auto" : "0px")};
  overflow: hidden;
`;

const ExitIcon = styled(exit)`
  margin-right: 16px;
`;

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
