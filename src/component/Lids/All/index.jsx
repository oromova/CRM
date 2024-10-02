import React from 'react'
import { GenericTable } from '../../Generics/Table';
import { Container } from './style';

export const AllLids = () => {
  const headCells = [{
    id: "name",
    label: "O'quvchining ismi", 
  },
  {
    id: "group",
    label: "Guruh / Fan", 
  },
  {
    id: "date",
    label: "Dars kuni va vaqti", 
  },
  {
    id: "addedDate",
    label: "Qo'shilgan sana", 
  },
  {
    id: "admin",
    label: "Moderator", 
  },
];

let rows = [
  {
    id: 'name',
    name: 'Javlon Javliyev',
    group: "Frontend",
    date: "21.05.2024",
    addedDate: "21.05.2024",
    admin: 'Webbrain admin'
  },
  {
    id: 'group',
    name: 'Akobir Turdiyev',
    group: "Frontend",
    date: "21.05.2024",
    addedDate: "21.05.2024",
    admin: 'Webbrain admin'
  },
  {
    id: 'date',
    name: 'Oromova Yulduz',
    group: "Frontend",
    date: "21.05.2024",
    addedDate: "21.05.2024",
    admin: 'Webbrain admin'
  },
  {
    id: 'date',
    name: 'Safarova Nilufar',
    group: "Frontend",
    date: "21.05.2024",
    addedDate: "21.05.2024",
    admin: 'Webbrain admin'
  },
];

  return (
    <Container>
      <GenericTable headCells={headCells} rows={rows}/>
    </Container>
  )
}
