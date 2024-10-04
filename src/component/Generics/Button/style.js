import styled from "styled-components";
import filter from '../../../assets/icons/buttonIcon/saralash.svg?react'
import imp from '../../../assets/icons/buttonIcon/import.svg?react'
import add from '../../../assets/icons/buttonIcon/plus.svg?react'


export const Icons = styled.div``

Icons.Filter = styled(filter)`
 & path {
    fill: white;
 }
`
Icons.Import = styled(imp)``
Icons.Add = styled(add)``

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid #f0f5ff;
  border-radius: 8px;
  padding: 10px 16px;
  color: #253e5f;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  gap: 8px;
  &:active {
    transform: scale(0.98);
  }
`;

Button.Filter = styled(Button)`
  background-color: var(--primaryColor);
  color: white;
`;

Button.Primary = styled(Button)`
  border: 0;
  background-color: #1890ff;
  color: white;
`;

Button.Import = styled(Button)``;
Button.Delete = styled(Button)`
  border-color: #ffa39e;
  color: #f5222d;
`;

Button.Add = styled(Button)`
  background-color: #1890ff;
  color: white;
`;
export { Button };
