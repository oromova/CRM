import { useState } from 'react';
import GenericButton from '../../../Generics/Button';
import GenericInput from '../../../Generics/Input';
import GenericSelect from '../../../Generics/Select';
import Subtitle from '../../../Generics/Subtitle';
import { Container, FileUpload, ImgBox } from './style';
import GenericTable from '../../../Generics/Table';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

export const Check = () => {
  const [url, setUrl] = useState("");
  const [open, setOpen] = useState(false);

  const rows = [
    { id: 1, location: "Bunyodkor ko'chasi, Chilonzor", filial: "Chilonzor" },
    { id: 2, location: "Abdulla Qodiriy, Shayhontohur", filial: "Ganga" },
  ];
  const cells = [
    { id: 'filial', label: "Filiallar" },
    {
      id: 'location', label: 'Manzil', align: 'right', render: () => {
        return <span style={{ color: '#1890FF', textDecoration: 'underline'}}>{props?.location}</span>;
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

export default Check;