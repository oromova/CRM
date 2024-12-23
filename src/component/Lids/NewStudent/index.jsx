import React, { useContext, useEffect, useState } from 'react';
import { GenericTable } from '../../Generics/Table';
import { Action, Container } from './style';
import { Breadcrumb } from '../../Generics/BreadCrumb/index';
import GenericButton from '../../Generics/Button';
import GenericSelect from '../../Generics/Select';
import AllLidsModal from './modal';
import moment from 'moment';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import useFetch from '../../../hooks/useFetch';
import { StudentsContext } from '../../../context/students';

export const NewStudent = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const [spinner, setSpinner] = useState(false);
  const [state, dispatch] = useContext(StudentsContext);

  const request = useFetch();

  const onEdit = (e, res) => {
    e.stopPropagation();
    setModal(!modalOpen);
    setModal(!modalOpen);
    setModalProps(res);
  };

  const getStudent = async (query = "") => {
    setSpinner(true);
    let res = await request(`/tabs/students${query}`);
    dispatch({ type: "get", payload: res });
    setSpinner(false);
  };

   // fetch
   useEffect(() => {
    getStudent();
  }, []);

  const headCells = [
    { id: "name", label: "O'quvchining ismi", },
    { id: "phone", label: "Telefon raqam", },
    { id: "group", label: "Guruh / Fan", },
    { id: "days", label: "Dars kuni va vaqti", },
    { id: "added_date", label: "Qo'shilgan sana", },
    { id: "admin", label: "Moderator", },
    {
      id: "action", label: "",
      render: (res) => (
        <Action>
          <Action.Edit onClick={(e) => onEdit(e, res)} />
          {/* <Action.Move onClick={onMove} /> */}
        </Action>
      )
    },
  ];

  const data1 = [
    { value: 'uzbek', title: 'Uzbek' },
    { value: 'russian', title: 'Russian' },
    { value: 'english', title: 'English' }
  ];

  const onToggleModal = () => {
    setModal(!modalOpen);
    setModalProps(null);
  };

  const onSave = () => {};

  return (
    <Container>
      <AllLidsModal
        data={modalProps}
        open={modalOpen}
        onClose={onToggleModal}
        onSave={onSave}
        reload={getStudent}
      />
      <Breadcrumb>
        <GenericButton type='import' onClick={() => setOpen(!open)}>
          Import
        </GenericButton>
        <GenericButton type='filter' onClick={() => setOpen(!open)}>
          Filter
        </GenericButton>
        <GenericButton type='add' onClick={onToggleModal}>
          Talaba qo'shish
        </GenericButton>
      </Breadcrumb>
      <GenericTable open={open} headCells={headCells} rows={state} spinner={spinner}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
        defaultValue={moment()}
        views={["year", "month", "day"]}
        slotProps={{ textField: {size: "small"} }}
        />
      </LocalizationProvider>
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
      </GenericTable>
    </Container >
  );
};

export default NewStudent;
