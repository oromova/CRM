import GenericButton from '../Button';
import { Container, Footer, Wrapper } from './style';
import { createPortal } from 'react-dom';

export const Modal = (props) => {
  return props?.open ? createPortal(
    <Container>
      <Wrapper>
        {props?.children}
        <Footer>
          {props?.onClose && <GenericButton type="delete" onClick={props?.onClose}>
            O'chirish
          </GenericButton>}
          {props?.onSave && <GenericButton type="primary" onClick={props?.onClose}>
            Saqlash
          </GenericButton>}
        </Footer>
      </Wrapper>
    </Container>,
    document.body
  ):null;
};
