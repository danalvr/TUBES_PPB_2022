import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// style
import './detail.css';

export default function DetailGames(props) {
  let { id } = useParams();
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      let response = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games', {
        headers: {
          'X-RapidAPI-Key': '1ade0b898cmsh01fbf130f7bbf69p18e287jsn5a21ca290333',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        },
      });
      //   console.log(response.data);
      setUsers(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="main-detail">
      {users.map(
        (user, index) =>
          user.id == id ? (
            <div key={index}>
              <div className="img-detail-games">
                <img src={user.thumbnail} id="img-games" alt="" />
              </div>
              <div id="spec-games">
                <table border="1" className="styled-table">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Title</td>
                      <td>{user.title}</td>
                    </tr>
                    <tr>
                      <td>Genre</td>
                      <td>{user.genre}</td>
                    </tr>
                    <tr>
                      <td>Platform</td>
                      <td>{user.platform}</td>
                    </tr>
                    <tr>
                      <td>Publisher</td>
                      <td>{user.publisher}</td>
                    </tr>
                    <tr>
                      <td>Developer</td>
                      <td>{user.developer}</td>
                    </tr>
                    <tr>
                      <td>Release Date</td>
                      <td>{user.release_date}</td>
                    </tr>
                    <tr>
                      <td>Short Desc</td>
                      <td>{user.short_description}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : null
        // {user.id == id ? a : null}
      )}
    </div>
  );
}
