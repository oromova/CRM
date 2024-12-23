import GenericInput from "../../Generics/Input";
import { Modal } from "../../Generics/Modal";
import Subtitle from '../../Generics/Subtitle';
import GenericSelect from "../../Generics/Select";
import Title from '../../Generics/Title';
import { status, type } from "../../../utils/status";
import { groups } from "../../../utils/groups";
import { level } from "../../../utils/level";
import { useEffect, useState } from "react";
import moment from "moment";
import useFetch from "../../../hooks/useFetch";

const initialState = {
  title: '',
  group: "", //G11
  added_date: `${moment().day()}/${moment().month()}/${moment().year()}`,
  field: "", // Frontend
  status: false,
  type: "Online",
  end_time: "",
  start_time: "",
};


export const AllLidsModal = (props) => {
  const { data } = props;
  const [state, setState] = useState(initialState);
  const request = useFetch();

  const onSave = () => {
    // edit
    if (data?.id) {
      request(`/tabs/groups/id/${data.id}`, {
        method: "PATCH",
        body: state,
      }).then(() => {
        props.reload();
        onClose(setState(initialState));
      });
    }
    // add
    else
      request("/tabs/groups", {
        method: "POST",
        body: { ...state, id: Date.now() },
      }).then(() => {
        props.reload();
        props.onClose(setState(initialState));
      });
  };

  useEffect(() => {
    if (data) {
      setState({ ...state, ...data });
    }
  }, [data]);

  const onChangeFilter = ({ target }) => {
    const { value, name } = target;
    setState({ ...state, [name]: value });
  };

  return (
    <Modal {...props} onSave={onSave}>
      <Title size="34px">Guruh qo'shish</Title>
      {/* full name */}
      <Subtitle mt={16} mb={8} color={"#929FAF"} >
        Guruh nomi
      </Subtitle>
      <GenericInput 
        fontWeight={500} 
        width={500} 
        value={state?.title} 
        name="title"
        onChange={onChangeFilter}
     />
      {/* yo'nalish */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Yo'nalishni tanlang
      </Subtitle>
      <GenericSelect 
        data={groups} 
        width={'100%'} 
        onChange={onChangeFilter} 
        value={state.field} 
        name="field"
        />
      {/* daraja */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Darajangizni tanlang
      </Subtitle>
      <GenericSelect 
        data={level} 
        width={'100%'} 
        onChange={onChangeFilter} 
        value={state.level} 
        name="level"
        >
      </GenericSelect>
      {/* Kun */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Boshlanish vaqti
      </Subtitle>
      <GenericInput 
        fontWeight={500} 
        width={500} 
        value={state?.start_time} 
        name="start_time"
        onChange={onChangeFilter} 
        />
      {/* Kelish  sanasi */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Tugash vaqti
      </Subtitle>
      <GenericInput 
        fontWeight={500} 
        width={500} 
        value={state?.end_time} 
        name="end_time"
        onChange={onChangeFilter} 
      />
      {/* O'qish Turi */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        O'qish Turi
      </Subtitle>
      <GenericSelect 
        data={type} 
        width={'100%'} 
        onChange={onChangeFilter} 
        value={state.type}
        name="type"
        />
      {/* izoh */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Status
      </Subtitle>
      <GenericSelect 
        data={status} 
        width={'100%'} 
        value={state.status} 
        name="status"
        onChange={onChangeFilter} 
        />
    </Modal>
  );
};

export default AllLidsModal;