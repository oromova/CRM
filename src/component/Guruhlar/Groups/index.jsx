/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { GenericTable } from "../../Generics/Table";
import { Action, Container } from "./style";
import { Breadcrumb } from "../../Generics/BreadCrumb";
import GenericButton from "../../Generics/Button";
import AllLidsModal from "./modal";
import useFetch from "../../../hooks/useFetch";

export const Groups = () => {
  const [state, dispatch] = useState([]);

  const [modalOpen, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const [spinner, setSpinner] = useState(false);
  const request = useFetch();

  const onEdit = (e, res) => {
    e.stopPropagation();
    setModal(!modalOpen);
    setModalProps(res);
  };

  const getData = async () => {
    setSpinner(true);
    let res = await request(`/tabs/groups`);
    dispatch(res);
    setSpinner(false);
  };
  // fetch
  useEffect(() => {
    getData();
  }, []);
  const onMove = (e, value) => {
    setSpinner(true);
    e.stopPropagation();
    request(`/tabs/groups/id/*${value?.id}*`, { method: "DELETE" }).then(() => {
      getData();
    });
  };

  const headCells = [
    { id: "title", label: "Guruh / Fan" },
    { id: "field", label: "Kurs" },
    { id: "level", label: "Level" },
    { id: "start_time", label: "Boshlanish" },
    { id: "end_time", label: "Tugash" },
    { id: "type", label: "Turi" },
    {
      id: "completed",
      label: "Status",
      render: (res) => <span>{res.completed ? "Completed" : "Active"}</span>,
    },
    {
      id: "action",
      label: "",
      render: (res) => (
        <Action>
          <Action.Edit onClick={(e) => onEdit(e, res)} />
          <Action.Delete onClick={(e) => onMove(e, res)} />
          {/* <Action.Move onClick={onMove} /> */}
        </Action>
      ),
    },
  ];

  const onToggleModal = () => {
    setModal(!modalOpen);
    setModalProps(null);
  };
  const onSave = () => {
    // setModal(!modalOpen);
  };
  return (
    <Container>
      <AllLidsModal
        data={modalProps}
        open={modalOpen}
        onClose={onToggleModal}
        onSave={onSave}
        reload={getData}
      />
      <Breadcrumb>
        <GenericButton type="add" onClick={() => onToggleModal()}>
          Guruh qo'shish
        </GenericButton>
      </Breadcrumb>
      <GenericTable
        // open={open}
        headCells={headCells}
        rows={state}
        checkbox={false}
        url="/guruhlar/guruhlar/checkin"
        spinner={spinner}
      ></GenericTable>
    </Container>
  );
};

export default Groups;