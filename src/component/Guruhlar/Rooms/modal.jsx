import GenericInput from "../../Generics/Input";
import { Modal } from "../../Generics/Modal";
import Subtitle from '../../Generics/Subtitle';
import GenericSelect from "../../Generics/Select";
import Title from '../../Generics/Title';
import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";


const initialState = {
  name: "",
  capacity: "0",
  free_times: "",
  wifi: "FALSE",
  monitor: "FALSE",
  white_board: "FALSE",
  status: "FALSE",
};

export const RoomsModal = (props) => {
  const [state, setState] = useState(initialState);
  const request = useFetch();

  const { data } = props;
  const status = [
    { value: "TRUE", title: "TRUE" },
    { value: "FALSE", title: "FALSE" },
  ];

  useEffect(() => {
    if (data) {
      setState({ ...state, ...data });
    }
  }, [data]);

  const onChangeFilter = ({ target }) => {
    const { value, name } = target;
    setState({ ...state, [name]: value });
  };

  const onSave = () => {
    // edit
    if (data?.id) {
      request(`/tabs/rooms/id/${data.id}`, {
        method: "PATCH",
        body: state,
      }).then(() => {
        props.reload();
        props?.onClose(setState(initialState));
      });
    }
    // add
    else
      request("/tabs/rooms", {
        method: "POST",
        body: { ...state, id: Date.now() },
      }).then(() => {
        props.reload();
        props?.onClose(setState(initialState));
      });
  };

  return (
    <Modal {...props} onSave={onSave}>
      <Title size="34px">Lid qo'shish</Title>
      {/* full name */}
      <Subtitle mt={16} mb={8} color={"#929FAF"} >
        Xonaning nomi
      </Subtitle>
      <GenericInput
        color="black"
        fontWeight={500}
        width={500}
        value={state?.name}
        name="name"
        onChange={onChangeFilter}
      />
      {/* capasity */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Xonaning sig'imi
      </Subtitle>
      <GenericInput
        fontWeight={500}
        width={500}
        value={state?.capacity}
        name="capacity"
        onChange={onChangeFilter}
      />
      {/* free times */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Bo'sh vaqtlar
      </Subtitle>
      <GenericInput
        fontWeight={500}
        width={500}
        value={state?.free_times}
        name="free_times"
        onChange={onChangeFilter}
      />

      {/* Wifi */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        WI-FI
      </Subtitle>
      <GenericSelect
        data={status}
        width={'100%'}
        value={state?.wifi}
        name="wifi"
      />
      {/* Monitor */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Monitor
      </Subtitle>
      <GenericSelect
        data={status}
        width={'100%'}
        value={state?.monitor}
        name="monitor"
        onChange={onChangeFilter}
      />
      {/* Whiteboard */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        White Boards
      </Subtitle>
      <GenericSelect
        data={status}
        width={'100%'}
        value={state?.white_board}
        name="white_board"
        onChange={onChangeFilter}
      />
      {/* Status */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Status
      </Subtitle>
      <GenericSelect
        data={status}
        width={'100%'}
        value={state?.status}
        name="status"
        onChange={onChangeFilter}
      />
    </Modal>
  );
};

export default RoomsModal;