import React, { useState } from 'react';
import { GenericTable } from '../../Generics/Table';
import { Container } from './style';
import { Breadcrumb } from '../../Generics/BreadCrumb/index';
import GenericButton from '../../Generics/Button';
// import GenericSelect from '../../Generics/Select';
import AllLidsModal from './modal';
import { students } from '../../../mock/students';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

export const Checkin = () => {
  const [rows, setRows] = useState(students);
  const headCells = [
    { id: "name", label: "Ismi", },
    { id: "phone", label: "Telefon raqam", },
  ];

  return (
    <Container>
      <Breadcrumb>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            defaultValue={moment()}
            views={["year", "month", "day"]}
            slotProps={{ textField: { size: "small" } }}
            sx={{ width: '150px' }}
          />
        </LocalizationProvider>
      </Breadcrumb>
      <GenericTable
        headCells={headCells}
        rows={rows}
        checkbox={false}
      >
      </GenericTable>
    </Container >
  );
};

export default Checkin;
