import GenericInput from "../../Generics/Input";
import { Modal } from "../../Generics/Modal";
import Subtitle from '../../Generics/Subtitle';
import GenericSelect from "../../Generics/Select";
import Title from '../../Generics/Title';
import { Devider, Section } from "./style";

export const AllLidsModal = (props) => {
  const { data } = props;
  const selectData = data && [
    { value: "Frontend", title: "Frontend" },
    { value: "Backend", title: "Backend" },
  ];

  return (
    <Modal {...props}>
      <Title size="34px">Lid qo'shish</Title>
      {/* full name */}
      <Subtitle mt={16} mb={8} color={"#929FAF"} >
        Studentning ismi
      </Subtitle>
      <GenericInput color="black" fontWeight={500} width={500} value={data?.name} />
      {/* Telefon raqam */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>Telefon raqami</Subtitle>
      <GenericSelect width={'100%'} value={data?.level}></GenericSelect>
      {/* Jinsi */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>Jinsi</Subtitle>
      <GenericSelect width={'100%'} value={data?.days} ></GenericSelect>
      {/* Ustoz */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>O'qtuvchini tanlang</Subtitle>
      <GenericSelect width={'100%'} value={data?.days} ></GenericSelect>
      {/* Foiz */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>Foiz tanlang</Subtitle>
      <GenericSelect width={'100%'}></GenericSelect>

      {/* Filiallar & Role*/}
      <Devider>
        <Devider.Filiallar>
          <Devider.Title>Filiallar</Devider.Title>
          <Section> - Chilonzor</Section>
          <Section> - Namangan</Section>
          <Section> - Beruniy</Section>
          <Section> - Ganga</Section>
        </Devider.Filiallar>
        <Devider.Role>
          <Devider.Title>Role</Devider.Title>
          <GenericSelect mt={12} data={selectData} width={"100%"} value={data?.group}></GenericSelect>
          <GenericSelect mt={12} data={selectData} width={"100%"} value={data?.group}></GenericSelect>
          <GenericSelect mt={12} data={selectData} width={"100%"} value={data?.group}></GenericSelect>
          <GenericSelect mt={12} data={selectData} width={"100%"} value={data?.group}></GenericSelect>
        </Devider.Role>
      </Devider>
    </Modal>
  );
};

export default AllLidsModal;