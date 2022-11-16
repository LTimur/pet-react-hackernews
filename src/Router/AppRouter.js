import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../Components/Header/Header';
import { AppStories } from '../Components/AppStories/AppStories';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route exact path='/' element={<AppStories/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

