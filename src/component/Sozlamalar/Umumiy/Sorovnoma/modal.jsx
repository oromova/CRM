import GenericInput from "../../../Generics/Input";
import { Modal } from "../../../Generics/Modal";
import Subtitle from '../../../Generics/Subtitle';
import Title from '../../../Generics/Title';

export const SorovnomaModal = (props) => {
  const { data } = props;

  return (
    <Modal {...props}>
      <Title size="34px">So'rovnoma qo'shish</Title>
      {/* full name */}
      <Subtitle mt={16} mb={8} color={"#929FAF"} >
        Nomi
      </Subtitle>
      <GenericInput color="black" fontWeight={500} width={500} value={data?.name } />
      {/*  Manzil */}
      <Subtitle mt={16} mb={8} color={"#929FAF"} >
        Manzil
      </Subtitle>
      <GenericInput color="black" fontWeight={500} width={500} value={data?.name } />    
      {/* Sig'im */}
      <Subtitle mt={16} mb={8} color={"#929FAF"} >
        Sig'im
      </Subtitle>
      <GenericInput color="black" fontWeight={500} width={500} value={data?.name } />     
      </Modal>
  );
};

export default SorovnomaModal;