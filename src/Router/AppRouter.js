import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../Components/Header/Header';
import { AppStories } from '../Components/AppStories/AppStories';
import { PageNotFound } from '../Components/PageNotFound/PageNotFound';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route exact path='/' element={<AppStories/>} />
          <Route component={PageNotFound} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

