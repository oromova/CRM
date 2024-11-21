import { useContext, useEffect, useState } from 'react';
import { GenericTable } from '../../Generics/Table';
import { Action, Container } from './style';
import { Breadcrumb } from '../../Generics/BreadCrumb';
import GenericButton from '../../Generics/Button';
import GenericSelect from '../../Generics/Select';
import AllLidsModal from './modal';
import useFetch from "../../../hooks/useFetch"
import { StudentsContext } from '../../../context/students'
import { useLocation, useNavigate } from "react-router-dom"
import GenericInput from '../../Generics/Input';
import replace from "../../../hooks/useReplace"
import useQuery from "../../../hooks/useQuery"

export const AllLids = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const [state, dispatch] = useContext(StudentsContext);
  const [spinner, setSpinner] = useState(false)
  const query = useQuery();
  
  const request = useFetch();
  const navigate = useNavigate();
  const location = useLocation();
  const [filter, setFilter] = useState({
    name: query.get("name") || "",
    group: query.get("group"),
  });

  const getStudent = async () => {
    setSpinner(true)
    let res = await request("/tabs/students");
    dispatch({ type: "get", payload: res })
    setSpinner(false)
  }

  // fetch
  useEffect (() =>{
    getStudent();
  }, [])

  const onEdit = (e, res) => {
    e.stopPropagation();
    setModal(!modalOpen);
    setModalProps(res);
  };
  const onMove = (e, value) => {
    setSpinner(true)
    e.stopPropagation();
    console.log(value);
    request(`/tabs/students/id/*${value?.id}*`, { method: "DELETE" }).then(
      (rs) => {
        console.log(rs, "deleted");
        getStudent()
      }
    )
  };

  const headCells = [
    { id: "name", label: "O'quvchining ismi", },
    { id: "field", label: "Guruh / Fan", },
    { id: "days", label: "Dars kuni va vaqti", },
    { id: "added_date", label: "Qo'shilgan sana", },
    { id: "admin", label: "Moderator", },
    {
      id: "action", 
      label: "",
      render: (res) => (
        <Action>
          <Action.Edit onClick={(e) => onEdit(e, res)} />
          <Action.Move onClick={(e) => onMove(e, res)} />
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

  const onSave = () => {
  };

  const onChangeFilter = ({ target }) => {
    const { value, name } = target;
    setFilter({ ...filter, [name]: value });

    navigate(`${location.pathname}${replace(value, name)}`);
  };

  return (
    <Container>
      <AllLidsModal
        data={modalProps}
        open={modalOpen}
        onClose={onToggleModal}
        onSave={onSave}
      />
      <Breadcrumb>
        <GenericButton type='import' onClick={() => setOpen(!open)}>
          Import
        </GenericButton>
        <GenericButton type='filter' onClick={() => setOpen(!open)}>
          Filter
        </GenericButton>
        <GenericButton type='primary' onClick={onToggleModal}>
          Lid qo'shish
        </GenericButton>
      </Breadcrumb>
      <GenericTable 
        open={open} 
        headCells={headCells} 
        rows={state} 
        spinner={spinner}
      >
        <GenericInput 
          value={filter.name}
          name="name"
          onChange={onChangeFilter}
        />
        <GenericInput 
          value={filter.group}
          name="group"
          onChange={onChangeFilter}
        />
        <GenericSelect value='uzbek' data={data1} />
        <GenericSelect value='english' data={data1} />
        <GenericSelect value='russian' data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
      </GenericTable>
    </Container >
  );
};
