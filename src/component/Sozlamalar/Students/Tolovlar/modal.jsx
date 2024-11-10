import GenericInput from "../../../Generics/Input";
import { Modal } from "../../../Generics/Modal";
import Subtitle from '../../../Generics/Subtitle';
import Title from '../../../Generics/Title';

export const TolovlarModal = (props) => {
  const { data } = props;

  return (
    <Modal {...props}>
      <Title size="34px">Daraja qo'shish</Title>
      {/* full name */}
      <Subtitle mt={16} mb={8} color={"#929FAF"} >
        Nomi
      </Subtitle>
      <GenericInput color="black" fontWeight={500} width={500} value={data?.name} />
      {/*  Manzil */}
      <div style={{ display: 'flex', gap: 20 }}>
        <div style={{flex: 1}}>
          <Subtitle mt={16} mb={8} color={"#929FAF"} >
            Yarim Stavka
          </Subtitle>
          <GenericInput color="black" fontWeight={500} value={data?.name} />
        </div>
        <div style={{flex: 1}}>
          <Subtitle mt={16} mb={8} color={"#929FAF"} >
            Bir stavka
          </Subtitle>
          <GenericInput color="black" fontWeight={500} value={data?.name} />
        </div>

      </div>
    </Modal>
  );
};

export default TolovlarModal;