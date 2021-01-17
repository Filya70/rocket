import React from 'react';
import styled from 'styled-components';

import colors from '../../styles/colors';

const CardPost = ({ title, text, name, username }) => {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
      <CardAuthor>
        <span>{name}</span>
        <span>{username}</span>
      </CardAuthor>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${colors.grey};
  border-radius: 10px;
  background: ${colors.white};
  max-width: 350px;
  padding: 15px;
  transition: 0.3s;
  &:hover {
    -webkit-box-shadow: 2px 3px 7px -3px #2e2e2e;
    box-shadow: 2px 3px 7px -3px #2e2e2e;
  }
`;

const CardTitle = styled.span`
  font-size: 21px;
  font-weight: bold;
  padding: 5px 0px;
`;

const CardText = styled.p`
  font-size: 18px;
`;

const CardAuthor = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CardPost;
