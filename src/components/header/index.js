import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function index() {
  return (
    <header>
      <Link id="brand" to="/">
        GS-STORE
      </Link>

      {/* <a id="brand-profile" href="/profile">
        Profile
      </a> */}
    </header>
  );
}
