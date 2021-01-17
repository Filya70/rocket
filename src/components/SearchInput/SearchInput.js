import React from 'react';
import styled from 'styled-components';

import colors from '../../styles/colors';

const SearchInput = () => {
  return (
    <>
      <Input type="search" placeholder="Поиск статьи" />
    </>
  );
};

const Input = styled.input`
  padding: 0.5em;
  border: 1.5px solid ${colors.grey};
  width: 100%;
  height: min-content;
  max-width: 390px;
  line-height: 0.5em;
  &:focus {
    outline: none;
  }
`;

export default SearchInput;
