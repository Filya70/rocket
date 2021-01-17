import React, { useState } from 'react';
import styled from 'styled-components';

import colors from '../../styles/colors';

const SearchInput = ({ query }) => {
  const [text, setText] = useState('');

  const onChange = (value) => {
    setText(value);
    query(value);
  };

  return (
    <>
      <Input
        type="search"
        placeholder="Поиск статьи"
        onChange={(event) => onChange(event.target.value)}
      />
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
