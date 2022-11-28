import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Fragment } from 'react';
import CardModel2 from '../../components/card-model-2';
import './index.css';

export default function Home(props) {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState();

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

  const handleDetailGames = (id) => {
    navigate(`/detail-games/${id}`);
    console.log(id);
  };

  useEffect(() => {
    getUsers();
  }, []);
  const onSearch = (e) => {
    if (e.key === 'Enter') {
      setQuery(e.target.value);
      // console.log(query);
    }
  };
  return (
    <div className="main-games">
      <div className="list-all-games">
        <p id="movies">All Games</p>
      </div>
      <div className="search-all-games">
        <input type="text" placeholder="Search.." onKeyDown={(e) => onSearch(e)} />
      </div>
      <div className="container-all-games">
        {query == undefined || query == ''
          ? users.map((user) =>
              user.id !== query ? (
                <Fragment key={user.id}>
                  <CardModel2 id={user.id} title={user.title} img={user.thumbnail} genre={user.genre} detailGames={handleDetailGames} />
                </Fragment>
              ) : null
            )
          : users.map((user) =>
              user.id == query ? (
                <Fragment key={user.id}>
                  <CardModel2 id={user.id} title={user.title} img={user.thumbnail} genre={user.genre} detailGames={handleDetailGames} />
                </Fragment>
              ) : null
            )}
      </div>
    </div>
  );
}
