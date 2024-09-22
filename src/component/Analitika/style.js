import styled from "styled-components";
import getValue from "../../hooks/getStyledValue";
import Title from "../Generics/Title";
import arrowUp from "../../assets/icons/statistics/up.svg?react";

const getColor = (title) => {
  switch (title) {
    case "Talabalar":
      return {
        primary: "rgb(82, 196, 26, 1)",
        secondary: "rgb(183, 235, 143, 1)",
        third: "rgb(246, 255, 237, 1)",
      };
    case "Mentorlar":
      return {
        primary: "rgb(250, 219, 20, 1)",
        secondary: "rgb(255, 229, 143, 1)",
        third: "rgb(255, 251, 230, 1)",
      };
    case "Filiallar":
      return {
        primary: "rgb(24, 144, 255, 1)",
        secondary: "rgb(145, 213, 255, 1)",
        third: "rgb(230, 247, 255, 1)",
      };
  }
};

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  gap: ${({ gap }) => getValue(gap, "16px")};
  width: 100%;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 24px;
  padding-bottom: 0;
  gap: ${({ gap }) => getValue(gap, "16px")};
  background-color: ${({ title }) => getColor(title)?.third};
`;

export const Section = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  .icon {
    margin-right: 16px;
  }
`;

export const Plus = styled.div`
  &::before {
    display: flex;
    justify-content: center;
    align-items: center;
    content: "+";
    color: white;
    width: 32px;
    height: 32px;
    max-width: 32px;
    max-height: 32px;
    min-width: 32px;
    min-height: 32px;
    font-size: 32px;
    font-weight: 600;
    border-radius: 50%;
    background-color: ${({ title }) => getColor(title)?.secondary};
  }
  &:active {
    transform: scale(0.97);
  }
  cursor: pointer;
`;

export const Counter = styled(Title)`
  font-size: 40px;
`;
export const Arrow = styled(arrowUp)`
  width: 24px;
  height: 24px;
  margin-right: 13px;
`;
