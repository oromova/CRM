import GenericInput from "../../Generics/Input";
import { Modal } from "../../Generics/Modal";
import Subtitle from '../../Generics/Subtitle';
import GenericSelect from "../../Generics/Select";
import Title from '../../Generics/Title';
import MultipleSelect from "../GroupsList/Multiselect";

export const AllLidsModal = (props) => {
  const { data } = props;
  const selectData = data && [
    { value: "Frontend", title: "Frontend" },
    { value: "Backend", title: "Backend"},
  ];

  return (
    <Modal {...props}>
      <Title size="34px">Lid qo'shish</Title>
      {/* Kursning yo'nalishi */}
      <Subtitle mt={16} mb={8} color={"#929FAF"} >
        Kursning yo'nalishi
      </Subtitle>
      <GenericInput color="black" fontWeight={500} width={500} value={data?.name } />
    
      {/* Filial */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>Filial</Subtitle>
      <MultipleSelect/>
    </Modal>
  );
};

export default AllLidsModal;