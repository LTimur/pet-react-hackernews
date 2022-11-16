import React from 'react';
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  return (
    <p>
      Page Not found. Go to <Link to="/">Home</Link>
    </p>
  );
};
