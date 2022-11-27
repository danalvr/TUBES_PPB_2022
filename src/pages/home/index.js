import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Fragment } from 'react';
import CardModel1 from '../../components/card-model-1';
import CardModel2 from '../../components/card-model-2';

// img
import Image1 from '../../img/img-1.jpg';
import Image2 from '../../img/img-2.jpg';
import Image3 from '../../img/img-3.jpg';
import Image4 from '../../img/img-4.jpg';
import './index.css';

export default function Home(props) {
  const [users, setUsers] = useState([]);

  const data = [
    {
      title: 'Playstation 5',
      id: 1,
      price: 'Rp5.000.000',
      genre: 'Game Console',
      img: Image1,
    },
    {
      title: 'Playstation 4',
      id: 2,
      price: 'Rp4.200.000',
      genre: 'Game Console',
      img: Image2,
    },
    {
      title: 'Playstation 3',
      id: 3,
      price: 'Rp3.300.000',
      genre: 'Game Console',
      img: Image3,
    },
    {
      title: 'Xbox One',
      id: 4,
      price: 'Rp4.800.000',
      genre: 'Game Console',
      img: Image4,
    },
  ];

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
    <div className="main">
      {/* <input type="text" placeholder="Search.." /> */}
      <div className="list-product">
        <p id="movies">Available Product</p>
        <Link id="all-products" to="/all-games">
          View All
        </Link>
      </div>
      <div className="container-information">
        {data.map((item) => (
          <Fragment key={item.id}>
            <CardModel1 title={item.title} img={item.img} genre={item.genre} price={item.price} />
          </Fragment>
        ))}
      </div>
      <div className="list-game">
        <p id="movies">Information</p>
        <Link id="all-games" to="/all-products">
          View All
        </Link>
      </div>
      <div className="container-product">
        {users.map((user, index) => (
          <Fragment key={index}>{index <= 4 ? <CardModel2 title={user.title} img={user.thumbnail} genre={user.genre} /> : null}</Fragment>
        ))}
      </div>
    </div>
  );
}
