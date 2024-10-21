import React, { useState } from 'react';
import { GenericTable } from '../../Generics/Table';
import { Action, Container } from './style';
import { Breadcrumb } from '../../Generics/BreadCrumb/index';
import GenericButton from '../../Generics/Button';
// import GenericSelect from '../../Generics/Select';
import GroupModal from './GroupModal';
import { rows } from '../../../mock/groups';
import CollapsibleTable from './Table';

export const GroupsList = () => {
  //const [open, setOpen] = useState(false);
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
    { id: "title", label: "Kurslar turi", },
    {
      id: "action", label: "",
      render: (res) => (
        <Action>
          <Action.Edit onClick={(e) => onEdit(e, res)} />
          {/* <Action.Move onClick={onMove} /> */}
          <Action.Delete onClick={() => { }} />
        </Action>
      ),
    },
  ];

  const onToggleModal = () => {
    setModal(!modalOpen);
    setModalProps(null);
  };

  const onSave = () => {

  };

  return (
    <Container>
      <GroupModal
        data={modalProps}
        open={modalOpen}
        onClose={onToggleModal}
        onSave={onSave}
      />
      <Breadcrumb>
        <GenericButton type='add' onClick={() => onToggleModal()}>
          Guruh qo'shish
        </GenericButton>
      </Breadcrumb>
      {/* <GenericTable
        headCells={headCells}
        rows={rows}
        checkbox={false}
        url="/guruhlar/groups/checkin"
      >
      </GenericTable> */}
      <CollapsibleTable rows={rows} cells={headCells} />
    </Container >
  );
};

export default GroupsList;
