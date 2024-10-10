import styled from "styled-components";
import edit from '../../../assets/icons/lids/edit.svg?react';
import move from '../../../assets/icons/lids/move.svg?react';
import del from "../../../assets/icons/lids/delete.svg?react"

export const Container = styled.div``
export const Action = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: 9999;
`

Action.Edit = styled(edit)`
  padding: 10px;
  width: 42px;
  height: 42px;
`
Action.Move = styled(move)`
  padding: 10px;
  width: 42px;
  height: 42px;
`

Action.Delete = styled(del)`
  padding: 10px;
  width: 38px;
  height: 42px;
`