import { useState } from 'react';
import { Container } from './style';
import GenericTable from '../../../Generics/Table';
import Breadcrumb from '../../BreadCrumb';
import GenericButton from '../../../Generics/Button';
import FiliallarModal from './modal';

export const Filiallar = () => {
  const [open, setOpen] = useState(false);

  const onSave = () => { setOpen(false); };
  const onClose = () => { setOpen(false); };

  const rows = [
    {
      id: 1,
      location: "Bunyodkor ko'chasi, 65-uy, Chilonzor",
      filial: "Chilonzor",
      href: "https://maps.app.goo.gl/3b4PMXmkiJ1uZZKs8"
    },
    {
      id: 2,
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
        </a>;
      }
    },
  ];

  return (
    <Container>
      <FiliallarModal open={open}
        onSave={onSave} onClose={onClose} />
      <Breadcrumb>
        <GenericButton onClick={() => setOpen(true)} type="add">
          Filial qo'shish
        </GenericButton>
      </Breadcrumb>
      <GenericTable
        checkbox={false}
        headCells={cells}
        rows={rows}>
      </GenericTable>
    </Container>
  );
};

export default Filiallar;