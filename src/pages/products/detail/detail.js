import React from 'react';
import { useParams } from 'react-router-dom';

// images
import Image1 from '../../../img/img-1.jpg';
import Image2 from '../../../img/img-2.jpg';
import Image3 from '../../../img/img-3.jpg';
import Image4 from '../../../img/img-4.jpg';
import Image5 from '../../../img/img-5.jpg';
import Image6 from '../../../img/img-6.jpg';
import Image7 from '../../../img/img-7.jpg';
import Image8 from '../../../img/img-8.jpg';
import Image9 from '../../../img/img-9.jpg';
import Image10 from '../../../img/img-10.jpg';
import Image11 from '../../../img/img-11.jpg';
import Image12 from '../../../img/img-12.jpg';
import Image13 from '../../../img/img-13.jpg';
import Image14 from '../../../img/img-14.jpg';

// style
import './detail.css';

export default function Detailproducts() {
  let { id } = useParams();

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

  return (
    <div className="main-detail">
      {data.map((item, index) =>
        item.id == id ? (
          <div key={index}>
            <div className="img-detail-products">
              <img src={item.img} id="img-products" alt="" />
            </div>
            <div id="spec-products">
              <table border="1" className="styled-table-products">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{item.title}</td>
                  </tr>
                  <tr>
                    <td>Category</td>
                    <td>{item.genre}</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>{item.price}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}
