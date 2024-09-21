import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from 'moment';
import React from 'react';

export const DateTimepicker = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
      label="Date"
      defaultValue={moment()}
      views={["year", "month", "day"]}
      slotProps={{ textField: {size: "small"} }}
      />
    </LocalizationProvider>
  );
};

export default DateTimepicker;