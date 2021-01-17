import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Header, CardsList } from './components';

function App() {
  const [posts, setPosts] = useState([]);
  const [sortPosts, setSortPosts] = useState(null);
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [queryString, setQueryString] = useState('');

  const setQuery = (value) => {
    setQueryString(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const postsData = await axios(`https://jsonplaceholder.typicode.com/posts`);
      const usersData = await axios('https://jsonplaceholder.typicode.com/users');

      setAuthors(usersData.data);
      setPosts(postsData.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (queryString) {
      const reg = new RegExp(queryString, 'i');
      setSortPosts(posts.filter((i) => i.title.match(reg) || i.body.match(reg)));
    } else {
      setSortPosts(null);
    }
  }, [queryString, posts]);

  return (
    <div className="App">
      <Header setQuery={(value) => setQuery(value)} />
      {sortPosts ? (
        <CardsList posts={sortPosts} loading={loading} users={authors} />
      ) : (
        <CardsList posts={posts} loading={loading} users={authors} />
      )}
    </div>
  );
}

export default App;
