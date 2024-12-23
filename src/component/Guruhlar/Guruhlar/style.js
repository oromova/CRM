import styled from "styled-components";
import edit from "../../../assets/icons/lids/edit.svg?react";
import move from "../../../assets/icons/lids/move.svg?react";
import del from "../../../assets/icons/lids/delete.svg?react";
import keldi from "../../../assets/icons/guruhlar/keldi.svg?react";
import sababli from "../../../assets/icons/guruhlar/sababli.svg?react";
import sababsiz from "../../../assets/icons/guruhlar/sababsiz.svg?react";
import birinchi from "../../../assets/icons/guruhlar/birinchi.svg?react";

export const Icon = styled.div``;
Icon.Keldi = styled(keldi)``;
Icon.Sababli = styled(sababli)``;
Icon.Sababsiz = styled(sababsiz)``;
Icon.Birinchi = styled(birinchi)``;

export const Container = styled.div``;
export const Action = styled.div`
  display: flex;
  justify-content: center;
  z-index: 9999;
`;

Action.Edit = styled(edit)`
  padding: 10px;
  width: 42px;
  height: 42px;
`;
Action.Move = styled(move)`
  padding: 10px;
  width: 42px;
  height: 42px;
`;

Action.Delete = styled(del)`
  padding: 10px;
  width: 38px;
  height: 42px;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  border: 1px solid #f0f0f0;
  width: 200px;
  height: 200px;
  background: white;
  border-radius: 8px;
  transform: translate(-50%, 15%);
  top: ${({ y }) => `${y}px`};
  left: ${({ x }) => `${x}px`};
`;

export const Arrow = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid #f0f0f0;
  align-self: center;
  margin-top: -16px;
  background-color: white;
  border-color: #f0f0f0 transparent transparent #f0f0f0;
  transform: rotate(45deg);
`;

export const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 15px;
  &:hover {
    background-color: #f8fafc;
  }
`;
