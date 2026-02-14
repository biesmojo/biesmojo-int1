import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ children, type = 'button', variant = 'primary', to, onClick, ...props }) {
  const className = `btn ${variant}`;

  if (to) {
    return (
      <Link to={to} className={className} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
