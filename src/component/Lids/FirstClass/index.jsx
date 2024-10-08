import React, { useState } from 'react';
import { GenericTable } from '../../Generics/Table';
import { Action, Container } from './style';
import { Breadcrumb } from '../../Generics/BreadCrumb/index';
import GenericButton from '../../Generics/Button';
import GenericSelect from '../../Generics/Select';
import AllLidsModal from './modal';

export const FirstClass = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({});

  const onEdit = (e, res) => {
    e.stopPropagation();
    setModal(!modalOpen);
    setModalProps(res);
  };
  const onMove = (e) => {
    e.stopPropagation();
  };

  const headCells = [
    { id: "name", label: "O'quvchining ismi", },
    { id: "group", label: "Guruh / Fan", },
    { id: "date", label: "Dars kuni va vaqti", },
    { id: "addedDate", label: "Qo'shilgan sana", },
    { id: "admin", label: "Moderator", },
    {
      id: "action", label: "",
      render: (res) => (
        <Action>
          <Action.Edit onClick={(e) => onEdit(e, res)} />
          <Action.Move onClick={onMove} />
        </Action>
      )
    },
  ];

  let rows = [
    {
      id: 1,
      name: 'Javlon Javliyev',
      group: "Frontend",
      date: "21.05.2024",
      days: "toq kunlari",
      addedDate: "21.05.2024",
      admin: 'Webbrain admin',
      level: "Beginner"
    },
    {
      id: 2,
      name: 'Akobir Turdiyev',
      group: "Frontend",
      date: "21.05.2024",
      days: "toq kunlari",
      addedDate: "21.05.2024",
      admin: 'Webbrain admin',
      level: "Junior",
    },
    {
      id: 3,
      name: 'Oromova Yulduz',
      group: "Frontend",
      date: "21.05.2024",
      days: "toq kunlari",
      addedDate: "21.05.2024",
      admin: 'Webbrain admin',
      level: "Junior",
    },
    {
      id: 4,
      name: 'Safarova Nilufar',
      group: "Frontend",
      date: "21.05.2024",
      days: "toq kunlari",
      addedDate: "21.05.2024",
      admin: 'Webbrain admin',
      level: "Junior",
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
        <GenericButton type='filter' onClick={() => setOpen(!open)}>
          Filter
        </GenericButton>
      </Breadcrumb>
      <GenericTable open={open} headCells={headCells} rows={rows}>
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
      </GenericTable>
    </Container >
  );
};

export default FirstClass;
