import React, { useState } from 'react';
import { GenericTable } from '../../Generics/Table';
import { Action, Container } from './style';
import { Breadcrumb } from '../../Generics/BreadCrumb/index';
import GenericButton from '../../Generics/Button';
import GenericSelect from '../../Generics/Select';
import AllLidsModal from './modal';

export const Groups = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({});

  const onEdit = (e, res) => {
    e.stopPropagation();
    setModal(!modalOpen);
    setModalProps(res);
  };
  // const onMove = (e) => {
  //   e.stopPropagation();
  // };

  const headCells = [
    { id: "group", label: "Guruh / Fan", },
    { id: "kurs", label: "Kurs", },
    { id: "level", label: "Level", },
    { id: "start", label: "Boshlanish", },
    { id: "end", label: "Tugashi", },
    { id: "turi", label: "Turi", },
    {
      id: "completed", 
      label: "Status",
      render: (res) => 
      <span>
        {res.completed ? "Completed" : "Active"}
      </span>,
    },
    {
      id: "action", label: "",
      render: (res) => (
        <Action>
          <Action.Edit onClick={(e) => onEdit(e, res)} />
          {/* <Action.Move onClick={onMove} /> */}
           <Action.Delete onClick={() => {}} /> 
        </Action>
      ),
    },
  ];

  let rows = [
    {
      id: 1,
      group: "Frontend",
      kurs: "Javascript",
      start: "13:00",
      end: "15:00",
      turi: 'Offline',
      level: "Beginner",
      completed: false,
    },
    {
      id: 2,
      group: "Frontend",
      kurs: "Javascript",
      start: "13:00",
      end: "15:00",
      turi: 'Offline',
      level: "Beginner",
      completed: false,
    },
    {
      id: 3,
      group: "Frontend",
      kurs: "Javascript",
      start: "13:00",
      end: "15:00",
      turi: 'Offline',
      level: "Beginner",
      completed: false,
    },
    {
      id: 4,
      group: "Frontend",
      kurs: "Javascript",
      start: "13:00",
      end: "15:00",
      turi: 'Offline',
      level: "Beginner",
      completed: false,
    },
  ];

  const data1 = [
    { value: 'uzbek', title: 'Uzbek' },
    { value: 'russian', title: 'Russian' },
    { value: 'english', title: 'English' }
  ];

  const onToggleModal = () => {
    setModal(!modalOpen);
    setModalProps(null);
  };

  const onSave = () => {

  };

  return (
    <Container>
      <AllLidsModal
        data={modalProps}
        open={modalOpen}
        onClose={onToggleModal}
        onSave={onSave}
      />
      <Breadcrumb>
        <GenericButton type='import' onClick={() => setOpen(!open)}>
          Import
        </GenericButton>
      </Breadcrumb>
      <GenericTable 
        open={open} 
        headCells={headCells} 
        rows={rows}
        checkbox={false}
        >
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
      </GenericTable>
    </Container >
  );
};

export default Groups;
