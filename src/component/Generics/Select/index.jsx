import { FormControl, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

export const GenericSelect = (props) => {
  const { data, width, onChange, name } = props;

  const [defaultVal, setDefaultVal] = useState(
    props?.value || (data && data[0]?.value)
  );

  const handleChange = (event) => {
    setDefaultVal(event.target.value);
    onChange && onChange(event);
  };
  return (
    <FormControl
      fullWidth
      sx={{ 
        m: 0,
        minWidth: 120, 
        width: width || 150, 
        // marginTop: props?.mt || 0,
      }}
      size='small'
    >
      <Select
        name={name}
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
              defaultChecked={item?.checked}
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
