import { Icon } from './style';
import { Arrow, ModalContainer, StatusWrapper } from "./style";


export const StatusModal = ({ open, align }) => {
  return open ? (
    <ModalContainer x={align.x} y={align.y}>
      <Arrow />
      <StatusWrapper>
        <Icon.Keldi /> Keldi
      </StatusWrapper>
      <StatusWrapper>
        <Icon.Birinchi /> Birinchi dars
      </StatusWrapper>
      <StatusWrapper>
        <Icon.Sababli /> Sababli
      </StatusWrapper>
      <StatusWrapper>
        <Icon.Sababsiz /> Sababsiz
      </StatusWrapper>   
    </ModalContainer>
  ) : null;
};

export default StatusModal;