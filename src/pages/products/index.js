import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react';
import CardModel1 from '../../components/card-model-1';

// img
import Image1 from '../../img/img-1.jpg';
import Image2 from '../../img/img-2.jpg';
import Image3 from '../../img/img-3.jpg';
import Image4 from '../../img/img-4.jpg';
import Image5 from '../../img/img-5.jpg';
import Image6 from '../../img/img-6.jpg';
import Image7 from '../../img/img-7.jpg';
import Image8 from '../../img/img-8.jpg';
import Image9 from '../../img/img-9.jpg';
import Image10 from '../../img/img-10.jpg';
import Image11 from '../../img/img-11.jpg';
import Image12 from '../../img/img-12.jpg';
import Image13 from '../../img/img-13.jpg';
import Image14 from '../../img/img-14.jpg';

import './index.css';

export default function Home(props) {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

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
    {
      title: 'Xbox 360',
      id: 5,
      price: 'Rp3.800.000',
      genre: 'Game Console',
      img: Image5,
    },
    {
      title: 'Nintendo Switch',
      id: 6,
      price: 'Rp3.800.000',
      genre: 'Game Console',
      img: Image6,
    },
    {
      title: 'Stick for Playstation 3',
      id: 7,
      price: 'Rp3.800.000',
      genre: 'Controller',
      img: Image7,
    },
    {
      title: 'Stick for Playstation 4',
      id: 8,
      price: 'Rp3.800.000',
      genre: 'Controller',
      img: Image8,
    },
    {
      title: 'stick for Playstation 5',
      id: 9,
      price: 'Rp3.800.000',
      genre: 'Controller',
      img: Image9,
    },
    {
      title: 'Stick for Xbox One',
      id: 10,
      price: 'Rp3.800.000',
      genre: 'Controller',
      img: Image10,
    },
    {
      title: 'Stick for Xbox 360',
      id: 11,
      price: 'Rp3.800.000',
      genre: 'Controller',
      img: Image11,
    },
    {
      title: 'Stick for Xbox X',
      id: 12,
      price: 'Rp3.800.000',
      genre: 'Controller',
      img: Image12,
    },
    {
      title: 'Playstation 2',
      id: 13,
      price: 'Rp3.800.000',
      genre: 'Game Console',
      img: Image13,
    },
    {
      title: 'Stick for Playstation 2',
      id: 14,
      price: 'Rp3.800.000',
      genre: 'Controller',
      img: Image14,
    },
  ];

  const handleDetailProducts = (id) => {
    navigate(`/detail-products/${id}`);
  };

  const onSearch = (e) => {
    if (e.key === 'Enter') {
      setQuery(e.target.value);
      // console.log(query);
    }
  };

  return (
    <div className="main-products">
      <div className="list-all-products">
        <p id="movies">All Products</p>
      </div>
      <div className="search-all-products">
        <input type="text" placeholder="Search.." onKeyDown={(e) => onSearch(e)} />
      </div>
      <div className="container-all-products">
        {/* {data.map((item) => (
          <Fragment key={item.id}>
            <CardModel1 id={item.id} title={item.title} img={item.img} genre={item.genre} price={item.price} detailProducts={handleDetailProducts} />
          </Fragment>
        ))} */}
        {query == undefined || query == ''
          ? data.map((item) =>
              item.id !== query ? (
                <Fragment key={item.id}>
                  <CardModel1 id={item.id} title={item.title} img={item.img} genre={item.genre} price={item.price} detailProducts={handleDetailProducts} />
                </Fragment>
              ) : null
            )
          : data.map((item) =>
              item.id == query ? (
                <Fragment key={item.id}>
                  <CardModel1 id={item.id} title={item.title} img={item.img} genre={item.genre} price={item.price} detailProducts={handleDetailProducts} />
                </Fragment>
              ) : null
            )}
      </div>
    </div>
  );
}
