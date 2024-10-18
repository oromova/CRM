import GenericInput from "../../Generics/Input";
import { Modal } from "../../Generics/Modal";
import Subtitle from '../../Generics/Subtitle';
import GenericSelect from "../../Generics/Select";
import Title from '../../Generics/Title';
import { Wrapper } from "./style";
import { Checkbox } from "@mui/material";
import { roles } from "../../../mock/roles";

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
        Daraja
      </Subtitle>
      <GenericInput color="black" fontWeight={500} width={500} value={data?.name} />
      {/* yo'nalish */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>Daraja izohi</Subtitle>
      <GenericInput color="black" fontWeight={500} width={500} value={data?.name} />
      <Wrapper>
        {
          roles.map(([title, role]) => {
            return (
              <Wrapper.Left key={title}>
                <Wrapper.Title> { title } </Wrapper.Title>
                  <div>
                    {
                      role.map(({status, title}) => {
                        return (<div key={title}>
                          <Checkbox defaultChecked={status} /> - {title}
                        </div>
                        );
                      })
                    }
               </div>
              </Wrapper.Left>
          ); 
        })
        }
    </Wrapper>
    </Modal >
  );
};

export default AllLidsModal;