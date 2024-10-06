import React, { useState } from 'react';
import { GenericTable } from '../../Generics/Table';
import { Action, Container } from './style';
import { Breadcrumb } from '../../Generics/BreadCrumb/index';
import GenericButton from '../../Generics/Button';
import GenericSelect from '../../Generics/Select';
import { Modal } from '../../Generics/Modal';

export const AllLids = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModal] = useState(false);
  const onEdit = (e) => {
    e.stopPropagation();
  };
  const onMove = (e) => {
    e.stopPropagation();
  };

  const headCells = [{
    id: "name",
    label: "O'quvchining ismi",
  },
  {
    id: "group",
    label: "Guruh / Fan",
  },
  {
    id: "date",
    label: "Dars kuni va vaqti",
  },
  {
    id: "addedDate",
    label: "Qo'shilgan sana",
  },
  {
    id: "admin",
    label: "Moderator",
  },
  {
    id: "action",
    label: "",
    render: (
      <Action>
        <Action.Edit onClick={onEdit} />
        <Action.Move onClick={onMove} />
      </Action>
    )
  },
  ];

  let rows = [
    {
      id: 'name',
      name: 'Javlon Javliyev',
      group: "Frontend",
      date: "21.05.2024",
      addedDate: "21.05.2024",
      admin: 'Webbrain admin'
    },
    {
      id: 'group',
      name: 'Akobir Turdiyev',
      group: "Frontend",
      date: "21.05.2024",
      addedDate: "21.05.2024",
      admin: 'Webbrain admin'
    },
    {
      id: 'date',
      name: 'Oromova Yulduz',
      group: "Frontend",
      date: "21.05.2024",
      addedDate: "21.05.2024",
      admin: 'Webbrain admin'
    },
    {
      id: 'date',
      name: 'Safarova Nilufar',
      group: "Frontend",
      date: "21.05.2024",
      addedDate: "21.05.2024",
      admin: 'Webbrain admin'
    },
  ];

  const data1 = [
    { value: 'uzbek', title: 'Uzbek' },
    { value: 'russian', title: 'Russian' },
    { value: 'english', title: 'English' }
  ];

  return (
    <Container>
      <Modal open={modalOpen}>
      <GenericButton type='primary' >
        Talaba qo'shish
      </GenericButton>
      </Modal>
      <Breadcrumb>
        <GenericButton type='import' onClick={() => setOpen(!open)}>
          Import
        </GenericButton>
        <GenericButton type='filter' onClick={() => setOpen(!open)}>
          Filter
        </GenericButton>
        <GenericButton type='primary' onClick={() => setModal(!modalOpen)}>
          Lid qo'shish
        </GenericButton>
      </Breadcrumb>
      <GenericTable open={open} headCells={headCells} rows={rows}>
        <GenericSelect value='uzbek' data={data1} />
        <GenericSelect value='english' data={data1} />
        <GenericSelect value='russian' data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
      </GenericTable>
    </Container>
  );
};
