import { useState } from 'react';
import { Container } from './style';
import GenericTable from '../../../Generics/Table';
import { Status } from '../Filiallar/style';
import Switch from '@mui/material/Switch';
 import { Breadcrumb } from '../../BreadCrumb';
import GenericButton from '../../../Generics/Button';

export const Xabarnoma = () => {
  const [open] = useState(false);

  const rows = [
    {
      id: 1,
      xabarnoma: "Dars vaqtini eslatish",
      time: "18:00",
      status: true,
    },
    {
      id: 2,
      xabarnoma: "Vazifalarni eslatish",
      time: "21:00",
      href: true,
    },
    {
      id: 3,
      xabarnoma: "To'lovlarni eslatishh",
      time: "20:00",
      href: true,
    },
  ];

  const cells = [
    { id: "xabarnoma", label: "Xabarnoma turi" },
    {
      id: "time",
      label: "Vaqti",
      align: "right",
      render: (props) => {
        return <Status>{props?.time}</Status>;
      },
    },
    {
      id: "status", 
      label: "Faollashtirish", 
      align: "right", 
      render: (props) => {
        return <Switch defaultChecked={props?.status}/>
      }
    },
  ];

  return (
    <Container>
      <Breadcrumb/>
      <GenericTable
        checkbox={false}
        open={open}
        headCells={cells}
        rows={rows}>
      </GenericTable>
    </Container>
  );
};

export default Xabarnoma;