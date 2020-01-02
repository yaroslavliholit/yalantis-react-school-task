import React from 'react';
import { LoaderWrapper } from './LoaderStyles';
import loader from './loader.svg';

const Loader = () => (
  <LoaderWrapper>
    <img src={loader} alt={loader} />
  </LoaderWrapper>
);

export default Loader;
