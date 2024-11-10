import { useState } from 'react';
import { Container } from './style';
import GenericTable from '../../../Generics/Table';
import { Breadcrumb } from '../../BreadCrumb';
import { TolovlarModal} from './modal';
import GenericButton from '../../../Generics/Button';
import { Switch } from '@mui/material';

export const Tolovlar = () => {
  const [open, setOpen] = useState(false);

  const onClose = () => { setOpen(false); };
  const onSave = () => { setOpen(false); };


  const rows = [
    {
      id: 1,
      tolov: "Ikkita dars uchun",
      bonus: "20,000 so'm",

    },
    {
      id: 2,
      tolov: "3ta guruh kelgani uchun",
      bonus: "50,000 so'm",
    },
  ];

  const cells = [
    { id: "tolov", label: "To'lov turi" },
    {
      id: "bonus",
      align: "right",
      label: <div>Bonusni O'chirish <Switch/></div>,
    },
  ];

  return (
    <Container>
      <TolovlarModal open={open} onClose={onClose} onSave={onSave} />
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

export default Tolovlar;