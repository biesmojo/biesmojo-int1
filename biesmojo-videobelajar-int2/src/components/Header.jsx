import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo.png';
import avatar from '../assets/images/avatar.png';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="brand">
          <img src={logo} alt="Logo VideoBelajar" style={{ width: '135px', height: '32px' }} />
        </div>
        <nav className="site-nav">
          <Link to="/">Beranda</Link>
          <a href="#">Kursus</a>
          <a href="#">Tentang</a>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
        <div className="profile">
          <img src={avatar} alt="Profil" />
        </div>
      </div>
    </header>
  );
}
