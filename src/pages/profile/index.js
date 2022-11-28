import React from 'react';
import ImageProfile from '../../img/img-profile.jpg';
import './index.css';

export default function Profile() {
  return (
    <div className="profile">
      <div className="box-img">
        <img src={ImageProfile} alt="" id="profile-img" />
      </div>
      <h2>Daniel Alvaro Sormin</h2>
      <p>Computer Engineer | Universitas Diponegoro</p>
      <div className="profile-desc"></div>
    </div>
  );
}
