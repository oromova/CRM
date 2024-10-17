import React, { useState } from 'react';
import { GenericTable } from '../../Generics/Table';
import { Action, Container } from './style';
import { Breadcrumb } from '../../Generics/BreadCrumb/index';
import GenericButton from '../../Generics/Button';
//import GenericSelect from '../../Generics/Select';
import AllLidsModal from './modal';

export const Hodimlar = () => {
  //const [open, setOpen] = useState(false);
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
    { id: "name", label: "To'liq ism", },
    { id: "birthDate", label: "Tug'ilgan sana", },
    { id: "jinsi", label: "Jinsi", },
    { id: "role", label: "Vazifasi", },
    { id: "tel", label: "Telefon raqami", },
    { id: 'filial', label: "Filial" },
    {
      id: "action", label: "",
      render: (res) => (
        <Action>
          <Action.Edit onClick={(e) => onEdit(e, res)} />
          <Action.Move onClick={onMove} />
        </Action>
      ),
    },
  ];

  let rows = [
    {
      id: 1,
      name: "Eshmatov Toshmat",
      birthDate: '12-26-1994',
      jinsi: 'erkak',
      role: "Moderator",
      tel: "+998 20 0071226",
      filial: "Chilonzor",
    },
    {
      id: 2,
      name: "Jone Doe",
      birthDate: '12-26-1994',
      jinsi: 'ayol',
      role: "O'qtuvchi",
      tel: "+998 20 0071226",
      filial: "Beruniy",
    },
    {
      id: 3,
      name: "Sherali Jo'rayev",
      birthDate: '12-26-1990',
      jinsi: 'erkak',
      role: "O'qtuvchi",
      tel: "+998 20 0071226",
      filial: "Ganga",
    },
    {
      id: 4,
      name: "Aktam Zaripov",
      birthDate: '12-26-1990',
      jinsi: 'erkak',
      role: "Adminstrator",
      tel: "+998 20 0071226",
      filial: "Ganga",
    },
  ];

  // const data1 = [
  //   { value: 'uzbek', title: 'Uzbek' },
  //   { value: 'russian', title: 'Russian' },
  //   { value: 'english', title: 'English' }
  // ];

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
        {/* <GenericButton type='filter' onClick={() => setOpen(!open)}>
          Filter
        </GenericButton> */}
        <GenericButton type='primary' onClick={onToggleModal}>
          Hodim qo'shish
        </GenericButton>
      </Breadcrumb>
      <GenericTable
        // open={open} 
        headCells={headCells}
        rows={rows}
        checkbox={false}
      >
        {/* <GenericSelect value='uzbek' data={data1} />
        <GenericSelect value='english' data={data1} />
        <GenericSelect value='russian' data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} /> */}
      </GenericTable>
    </Container >
  );
};

export default Hodimlar;