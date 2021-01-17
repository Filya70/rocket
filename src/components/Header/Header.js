import React from 'react';
import styled from 'styled-components';

import SearchInput from '../SearchInput/SearchInput';

import colors from '../../styles/colors';

const Header = () => {
  return (
    <HeaderStyled>
      <Brand>AmazingPosts🎉</Brand>
      <SearchInput />
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  min-height: 85px;
  // box-shadow: 0px 5px 5px 0px ${colors.blue};
  background: ${colors.blue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
`;

const Brand = styled.h1`
  color: ${colors.white};
`;

export default Header;
