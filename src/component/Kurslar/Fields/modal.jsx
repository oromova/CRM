import GenericInput from "../../Generics/Input";
import { Modal } from "../../Generics/Modal";
import Subtitle from '../../Generics/Subtitle';
import GenericSelect from "../../Generics/Select";
import Title from '../../Generics/Title';

export const AllLidsModal = (props) => {
  const { data } = props;
  const selectData = data && [
    { value: "Frontend", title: "Frontend" },
    { value: "Backend", title: "Backend"},
  ];

  return (
    <Modal {...props}>
      <Title size="34px">Lid qo'shish</Title>
      {/* full name */}
      <Subtitle mt={16} mb={8} color={"#929FAF"} >
        Studentning ismi
      </Subtitle>
      <GenericInput color="black" fontWeight={500} width={500} value={data?.name } />
      {/* yo'nalish */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>Yo'nalishni tanlang</Subtitle>
      <GenericSelect width={'100%'} value={data?.group}/>
      {/* daraja */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>Darajangizni tanlang</Subtitle>
      <GenericSelect width={'100%'} value={data?.level}></GenericSelect>
      {/* Kun */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>Kunni tanlang</Subtitle>
      <GenericSelect width={'100%'} value={data?.days} ></GenericSelect>
      {/* Kelish  sanasi */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>Boshlash sanani tanlang</Subtitle>
      <GenericSelect width={'100%'}></GenericSelect>
      {/* izoh */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>Izoh</Subtitle>
      <GenericInput color="black" fontWeight={500} width={500} />
    </Modal>
  );
};

export default AllLidsModal;