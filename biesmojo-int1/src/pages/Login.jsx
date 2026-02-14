import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // refactor logic dari Login.html/js
  }

  return (
    <main className="auth-section">
      <div className="card">
        <div className="card-body">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <img src={logo} alt="Logo VideoBelajar" style={{ width: '135px', height: '32px' }} />
          </div>
          <h2>Masuk</h2>

          <form id="loginForm" onSubmit={handleSubmit} style={{ marginTop: '12px' }}>
            <div className="form-group">
              <label htmlFor="loginEmail">E-mail</label>
              <input
                id="loginEmail"
                name="email"
                type="email"
                placeholder="nama@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="loginPassword">Kata sandi</label>
              <input
                id="loginPassword"
                name="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '12px 0' }}>
              <a className="btn-link" style={{ color: 'blue' }} href="#">Lupa password?</a>
              <div style={{ display: 'flex', gap: '12px' }}>
                <Link to="/register" className="btn ghost">Daftar</Link>
                <button className="btn primary" type="submit">Masuk</button>
              </div>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '16px 0' }} />
            <button className="btn secondary" type="button">Masuk dengan Google</button>
          </form>
        </div>
      </div>
    </main>
  );
}
