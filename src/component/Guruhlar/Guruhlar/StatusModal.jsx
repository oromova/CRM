import { Icon } from './style';
import { Arrow, ModalContainer, StatusWrapper } from "./style";


export const StatusModal = ({ open, align, onClick }) => {
  return open ? (
    <ModalContainer x={align.x} y={align.y}>
      <Arrow />
      <StatusWrapper onClick={() => onClick('keldi')}>
        <Icon.Keldi /> Keldi
      </StatusWrapper>
      <StatusWrapper onClick={() => onClick('birinchi')}>
        <Icon.Birinchi /> Birinchi dars
      </StatusWrapper>
      <StatusWrapper onClick={() => onClick('sababli')}>
        <Icon.Sababli /> Sababli
      </StatusWrapper>
      <StatusWrapper onClick={() => onClick('sababsiz')}>
        <Icon.Sababsiz /> Sababsiz
      </StatusWrapper>
    </ModalContainer>
  ) : null;
};

export default StatusModal;