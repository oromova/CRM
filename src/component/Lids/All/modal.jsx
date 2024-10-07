import GenericInput from "../../Generics/Input";
import { Modal } from "../../Generics/Modal";
import Subtitle from '../../Generics/Subtitle';
import GenericSelect from "../../Generics/Select"
import Title from '../../Generics/Title'

export const AllLidsModal = (props) => {
  return (
    <Modal {...props}>
      <Title>Lid qo'shish</Title>
      {/* full name */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>Studentning ismi</Subtitle>
      <GenericInput color="black" fontWeight={500} width={500}/>
      {/* yo'nalish */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>Yo'nalishni tanlang</Subtitle>
      <GenericSelect width={'100%'}></GenericSelect>
      {/* daraja */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>Darajangizni tanlang</Subtitle>
      <GenericSelect width={'100%'}></GenericSelect>
      {/* Kun */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>Kunni tanlang</Subtitle>
      <GenericSelect width={'100%'}></GenericSelect>
      {/* Kelish  tanlang */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>Boshlash sanani tanlang</Subtitle>
      <GenericSelect width={'100%'}></GenericSelect>
      {/* izoh */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>Izoh</Subtitle>
      <GenericInput color="black" fontWeight={500} width={500}/>
    </Modal>
  );
};

export default AllLidsModal;