import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Fragment } from 'react';
import CardModel2 from '../../components/card-model-2';
import './index.css';

export default function Home(props) {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      let response = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games', {
        headers: {
          'X-RapidAPI-Key': '1ade0b898cmsh01fbf130f7bbf69p18e287jsn5a21ca290333',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        },
      });
      setUsers(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="main">
      <div className="list-all-games">
        <p id="movies">All Games</p>
      </div>
      <div className="search-all-games">
        <input type="text" placeholder="Search.." />
      </div>
      <div className="container-all-games">
        {users.map((user, index) => (
          <Fragment key={index}>
            <CardModel2 title={user.title} img={user.thumbnail} genre={user.genre} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
