import React, { useContext, useEffect, useState } from 'react';
import { Wrapper, Fragment, ArrowIcon, DateCard } from './moliyaStyle';
import Subtitle from '../Generics/Subtitle';
import useDate, { weeks } from '../../hooks/date';
import { MoliyaContext } from '../../context/moliya';

export const Moliya = () => {
  const date = useDate();
  const [active, setActive] = useState(new Date().getDate());
  const [weekCount, changeWeek] = useState(0);
  const [state, dispatch] = useContext(MoliyaContext);

  const url = import.meta.env.VITE_BASE_URL;

  const onClickDate = (value) => {
    if (date.week(weekCount)[0].getDate() === value.getDate())
      changeWeek(weekCount - 1);
    else if (date.week(weekCount)[6]?.getDate() === value?.getDate())
      changeWeek(weekCount + 1);
    setActive(value.getDate());
  };

  const onClickForward = () => {
    changeWeek(weekCount + 6);
  };

  const onClickBackward = () => {
    changeWeek(weekCount - 6);
  };

  useEffect(() => {
    // moliya
    fetch(`${url}/tabs/moliya`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res, 'resss');
        dispatch({ type: "get", payload: res });
      });
  }, []);

  return (
    <Wrapper>
      <Fragment>
        <ArrowIcon left onClick={onClickBackward} />
        <Subtitle>
          {date.month?.full} {date.year}
        </Subtitle>
        <ArrowIcon onClick={onClickForward}/>
      </Fragment>
      <Fragment mt={16} mb={16}>
        {state.map((value) => {
          //const ac = active == value.getDate();
          // let date = new Date(value.day)
          // console.log(date, 'day');

        return (
            // <DateCard active={ac} key={value}
          //   onClick={() => onClickDate(value)}
          // >
          //   <Subtitle color={ac && 'white'} size={14}>
          //     {weeks[value.getDay()]?.short}
          //   </Subtitle>
          //   <Subtitle color={ac && 'white'} size={14}>
          //     {value.getDate()}
          //   </Subtitle>
          // </DateCard>
          null
          );
        })}
      </Fragment>
      <Subtitle size={14} color='#929FAF'>
        {date.date}-{date.month.full}, {date.year}
      </Subtitle>
      <Subtitle size={32} mt={5} mb={24}>
        8 520 000
        <Subtitle size={24} ml={16} color="#52C41A">
          +22%
        </Subtitle>
      </Subtitle>
      <Fragment mb={8}>
        <div>Talabalar</div>
        <Subtitle>5 760 000</Subtitle>
      </Fragment>
      <Fragment>
        <div>Darsliklar sotuvi</div>
        <Subtitle>2 180 000</Subtitle>
      </Fragment>
    </Wrapper >
  );
};

export default Moliya;