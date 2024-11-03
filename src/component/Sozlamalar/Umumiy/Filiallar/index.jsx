import { useState } from 'react';
import { Container } from './style';
import GenericTable from '../../../Generics/Table';

export const Filiallar = () => {
  const [open] = useState(false);

  const rows = [
    { id: 1, 
      location: "Bunyodkor ko'chasi, 65-uy, Chilonzor", 
      filial: "Chilonzor",
      href: "https://maps.app.goo.gl/3b4PMXmkiJ1uZZKs8"
    },
    { id: 2, 
      location: "Abdulla Qodiriy, Shayxontohur", 
      filial: "Ganga",
      href: "https://maps.app.goo.gl/3b4PMXmkiJ1uZZKs8"
    },
  ];
  const cells = [
    { id: "filial", label: "Filiallar" },
    {
      id: "location", 
      label: "Manzil", 
      align: "right", 
      render: (props) => {
        return <a href={props?.href} target='lang'>
          {props?.location}
          </a>
      }
    },
  ];

  return (
    <Container>
      <GenericTable
        checkbox={false}
        open={open}
        headCells={cells}
        rows={rows}>
      </GenericTable>
    </Container>
  );
};

export default Filiallar;