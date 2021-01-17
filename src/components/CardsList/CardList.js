import React from 'react';
import styled from 'styled-components';

import Loader from '../Loader/Loader';
import CardPost from '../CardPost/CardPost';

const CardList = ({ posts, loading, users }) => {
  return loading ? (
    <Loader />
  ) : (
    <Section>
      {posts.map((i) => (
        <CardPost
          key={i.id}
          title={i.title.trim()}
          text={i.body}
          name={users[i.userId - 1].name}
          username={users[i.userId - 1].username}
        />
      ))}
    </Section>
  );
};

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1vw;
  grid-row-gap: 30px;
  justify-items: center;
  max-width: 1500px;
  margin: 30px auto;
  padding: 0px 20px;
  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export default CardList;
