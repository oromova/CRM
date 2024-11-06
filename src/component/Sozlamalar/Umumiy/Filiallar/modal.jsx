import GenericInput from "../../../Generics/Input";
import { Modal } from "../../../Generics/Modal";
import Subtitle from '../../../Generics/Subtitle';
import GenericSelect from "../../../Generics/Select";
import Title from '../../../Generics/Title';

export const FiliallarModal = (props) => {
  const { data } = props;

  return (
    <Modal {...props}>
      <Title size="34px">Filial qo'shish</Title>
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
       {/* Talab */}
      <Subtitle mt={16} mb={8} color={"#929FAF"} >
        Talab
      </Subtitle>
      <GenericInput color="black" fontWeight={500} width={500} value={data?.name } /> 
      </Modal>
  );
};

export default FiliallarModal;