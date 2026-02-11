import React, { useState } from 'react';
import RegisterCard from '../components/CardRegister';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // Add registration logic here
    console.log('Register:', { name, email, phone, password, confirm });
  }

  return (
    <main className="section" style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
      <RegisterCard
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        password={password}
        setPassword={setPassword}
        confirm={confirm}
        setConfirm={setConfirm}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}
