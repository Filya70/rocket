import React from 'react';
import styled from 'styled-components';

import colors from '../../styles/colors';

const CardPost = () => {
  return (
    <Card>
      <div className="card_text">
        <span>Post text</span>
      </div>
      <div className="card_author">
        <span>Fila</span>
      </div>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${colors.grey};
  border-radius: 10px;
  max-width: 350px;
  padding: 15px;
`;

export default CardPost;
