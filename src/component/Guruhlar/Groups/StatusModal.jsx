import { Arrow, ModalContainer } from "./style";


export const StatusModal = ({open}) => {
  return open ? <ModalContainer>
    <Arrow/>
    StatusModal
    </ModalContainer> : null;
}

export default StatusModal;