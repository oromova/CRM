import { useEffect, useState } from 'react';
import { GenericTable } from '../../Generics/Table';
import { Action, Container } from './style';
import { Breadcrumb } from '../../Generics/BreadCrumb/index';
import GenericButton from '../../Generics/Button';
import RoomsModal from './modal';
import useFetch from '../../../hooks/useFetch';


export const Rooms = () => {
  const [state, dispatch] = useState([]);
  const [open, setOpen] = useState(false);
  const [modalOpen, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const request = useFetch();
  const [spinner, setSpinner] = useState(false);

  const onEdit = (e, res) => {
    e.stopPropagation();
    setModal(!modalOpen);
    setModalProps(res);
  };

  const headCells = [
    { id: "name", label: "Xona", },
    { id: "capacity", label: "O'rinlar soni", },
    {
      id: "free_times",
      label: "Bo'sh vaqti",
      render: ({ free_times }) => {
        return (
          <span>
            {free_times?.split(',')?.map((val) => (
              <span
                style={{
                  background: "whitesmoke",
                  margin: "5px",
                  borderRadius: "4px",
                  padding: "5px",
                }}
                key={val}
              >
                {val}
              </span>
            ))}
          </span>
        );
      },
    },
    { id: "wifi", label: "WI-FI", },
    { id: "monitor", label: "Monitor", },
    { id: "white_board", label: "Blackboard", },
    { id: 'status', label: "Status" },
    {
      id: "action", label: "",
      render: (res) => (
        <Action>
          <Action.Edit onClick={(e) => onEdit(e, res)} />
          <Action.Move onClick={(e) => onMove(e, res)} />
        </Action>
      ),
    },
  ];

  const onToggleModal = () => {
    setModal(!modalOpen);
    setModalProps(null);
  };

  const onSave = () => {

  };

  const getData = async () => {
    setSpinner(true);
    let res = await request(`/tabs/rooms`);
    dispatch(res);
    setSpinner(false);
  };
  // fetch
  useEffect(() => {
    getData();
  }, []);
  const onMove = (e, value) => {
    setSpinner(true);
    e.stopPropagation();
    request(`/tabs/rooms/id/*${value?.id}*`, { method: "DELETE" }).then(() => {
      getData();
    });
  };

  return (
    <Container>
      <RoomsModal
        data={modalProps}
        open={modalOpen}
        onClose={onToggleModal}
        onSave={onSave}
        reload={getData}
      />
      <Breadcrumb>

        <GenericButton type='primary' onClick={onToggleModal}>
          Xona qo'shish
        </GenericButton>
      </Breadcrumb>
      <GenericTable
        headCells={headCells}
        rows={state}
        checkbox={false}
        spinner={spinner}
      >
      </GenericTable>
    </Container >
  );
};

export default Rooms;