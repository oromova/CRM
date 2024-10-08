import { FormControl, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

export const GenericSelect = (props) => {
  const { data, width } = props;

  const [defaultVal, setDefaultVal] = useState(
    props?.value || (data && data[0]?.value)
  );

  const handleChange = (event) => {
    setDefaultVal(event.target.value);
  };
  return (
    <FormControl
      fullWidth
      sx={{ minWidth: 120, width: width || 150 }}
      size='small'
    >
      <Select
        sx={{ color: '#929FAF', border: '#929FAF', fontSize: "14px" }}
        value={defaultVal || "Select"}
        onChange={handleChange}
      >
        {data?.map((item) => {
          return (
            <MenuItem 
              sx={{ color: '#929FAF', fontSize: "14px" }} 
              key={item.value} 
              value={item?.value}
              >
              {item?.title}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default GenericSelect;
