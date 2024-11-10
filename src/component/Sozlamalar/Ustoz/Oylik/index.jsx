import { useState } from 'react';
import { Container } from './style';
import GenericTable from '../../../Generics/Table';
import { Breadcrumb } from '../../BreadCrumb';
import { DarajalarModal } from './modal';
import GenericButton from '../../../Generics/Button';

export const Oylik = () => {
  const [open, setOpen] = useState(false);

  const onClose = () => { setOpen(false) };
  const onSave = () => { setOpen(false) };


  const rows = [
    {
      id: 1,
      title: "Ustoz",
      foiz: "10 %",
    },
    
    {
      id: 2,
      title: "Manager",
      foiz: "5 %",
    },
    {
      id: 3,
      title: "Administrator",
      foiz: "3 %",
    },
  ];

  const cells = [
    { id: "title", label: "Qo'shimcha foiz turi" },
    {
      id: "foiz",
      label: "Foiz miqdori",
      align: "right"
    },
  ];

  return (
    <Container>
      <DarajalarModal open={open} onClose={onClose} onSave={onSave} />
      <Breadcrumb>
        <GenericButton onClick={() => setOpen(true)} type="add">Daraja qo'shish</GenericButton>
      </Breadcrumb>
      <GenericTable
        checkbox={false}
        open={open}
        headCells={cells}
        rows={rows}>
      </GenericTable>
    </Container>
  );
};

export default Oylik;