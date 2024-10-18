import styled from "styled-components";
import edit from '../../../assets/icons/lids/edit.svg?react'
import move from '../../../assets/icons/lids/move.svg?react'

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
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
Wrapper.Section = styled.div`
  display: flex;
`
Wrapper.Left = styled.div`
  display: flex;
  flex-direction: column;
`
Wrapper.Right = styled.div`
  display: flex;
  flex-direction: column;
`
Wrapper.Title = styled.div`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #253e5f80;
  margin: 16px 0;
`
