import React, { useState } from 'react';
import { GenericTable } from '../../Generics/Table';
import { Action, Container } from './style';
import { Breadcrumb } from '../../Generics/BreadCrumb/index';
import GenericButton from '../../Generics/Button';
//import GenericSelect from '../../Generics/Select';
import AllLidsModal from './modal';

export const Roles = () => {
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
    { id: "daraja", label: "Daraja", },
    { id: "izoh", label: "Daraja Izohi", },
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
      daraja: "Moderator",
      izoh: "Adminlarga tegishli ma'lumotlar"
    },
    {
      id: 2,
      daraja: "Director",
      izoh: "Bazadagi barcha ma'lumotlarni ko'rish huquqi"
    },
    {
      id: 3,
      daraja: "Manager",
      izoh: "Barcha Ma'lumotlar, Director PM dan tashqari",
    },
    {
      id: 4,
      daraja: "O'qtuvchi",
      izoh: "Ustozning darslari xolos",
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
          Xona qo'shish
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

export default Roles;