import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo.png';
import FormField from './FormField';
import Button from './Button';

export default function RegisterCard({
  name, setName,
  email, setEmail,
  phone, setPhone,
  password, setPassword,
  confirm, setConfirm,
  handleSubmit
}) {
  return (
    <div className="card" style={{ width: '100%', maxWidth: '560px' }}>
      <div className="card-body">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <img src={logo} alt="Logo VideoBelajar" style={{ width: '135px', height: '32px' }} />
        </div>
        <h2>Daftar</h2>

        <form onSubmit={handleSubmit} style={{ marginTop: '12px' }}>
          <FormField
            label="Nama"
            id="regName"
            name="name"
            type="text"
            placeholder="Nama lengkap"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <FormField
            label="E-mail"
            id="regEmail"
            name="email"
            type="email"
            placeholder="nama@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FormField
            label="Nomor HP"
            id="regPhone"
            name="phone"
            type="tel"
            placeholder="08xxxxxxxxxx"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <FormField
            label="Kata sandi"
            id="regPassword"
            name="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FormField
            label="Konfirmasi kata sandi"
            id="regConfirm"
            name="confirm"
            type="password"
            placeholder="••••••••"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '12px 0' }}>
            <a className="btn-link" style={{ color: 'blue' }} href="#">Lupa password?</a>
            <div style={{ display: 'flex', gap: '12px' }}>
              <Button to="/login" variant="ghost">Masuk</Button>
              <Button type="submit" variant="primary">Daftar</Button>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '16px 0' }} />
          <Button type="button" variant="secondary">Single Sign-On dengan Google</Button>
        </form>
      </div>
    </div>
  );
}
