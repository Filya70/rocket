import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header/Header';
import CardsList from './components/CardsList/CardList';

function App() {
  const [posts, setPosts] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('in quibusdam tempore odit est dolorem');

  useEffect(() => {
    const fetchData = async () => {
      const postsData = await axios(`https://jsonplaceholder.typicode.com/posts?title=${query}`);
      const usersData = await axios('https://jsonplaceholder.typicode.com/users');

      setAuthors(usersData.data);
      setPosts(postsData.data);
      setLoading(false);
    };

    fetchData();
  }, [query]);

  return (
    <div className="App">
      <Header />
      <CardsList posts={posts} loading={loading} users={authors} />
    </div>
  );
}

export default App;
