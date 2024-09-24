import React from 'react';
import { Wrapper, Fragment, ArrowIcon } from './moliyaStyle';
import Subtitle from '../Generics/Subtitle';

export const Moliya = () => {
  return (
    <Wrapper>
      <Fragment>
        <ArrowIcon />
        <Subtitle>May 13</Subtitle>
        <ArrowIcon right/>
      </Fragment>
    </Wrapper>
  );
};

export default Moliya;