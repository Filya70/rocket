import React from 'react';

import styled from 'styled-components';

import loader from '../../img/loader.gif';

const Loader = () => {
  return <LoaderStyled src={loader} alt="Loading" />;
};

const LoaderStyled = styled.img`
  display: block;
  margin: auto;
  margin-top: 200px;
`;

export default Loader;
