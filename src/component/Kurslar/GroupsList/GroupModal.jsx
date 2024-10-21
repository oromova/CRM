import GenericInput from "../../Generics/Input";
import { Modal } from "../../Generics/Modal";
import Subtitle from '../../Generics/Subtitle';
import Title from '../../Generics/Title';
import { Devider, Input, Section } from "./style";
import { Checkbox } from "@mui/material";

export const GroupModal = (props) => {
  const { data } = props;
  // const selectData = data && [
  //   { value: "Frontend", title: "Frontend" },
  //   { value: "Backend", title: "Backend" },
  // ];

  return (
    <Modal {...props}>
      <Title size="34px">Lid qo'shish</Title>
      {/* full name */}
      <Subtitle mt={16} mb={8} color={"#929FAF"} >
        Yo'nalish turi
      </Subtitle>
      <GenericInput color="black" fontWeight={500} width={500} value={data?.name} />

      {/* Filial*/}
      <Devider>
        <Devider.Filiallar>
          <Devider.Title>Filiallar</Devider.Title>
          <Section>
            <Checkbox/> Chilonzor
          </Section>
          <Section>
            <Checkbox/> Namangan
          </Section>
          <Section>
            <Checkbox/> Beruniy
          </Section>
          <Section>
            <Checkbox/> Ganga
          </Section>
        </Devider.Filiallar>
        <Devider.Role>
          <Devider.Title>Role</Devider.Title>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        </Devider.Role>
      </Devider>
    </Modal>
  );
};

export default GroupModal;