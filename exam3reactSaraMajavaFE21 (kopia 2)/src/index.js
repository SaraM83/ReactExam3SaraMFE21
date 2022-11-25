import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout/layout';
import App from './App';
import LoginPage from './pages/login/LoginPage'; 
import AddMoviePage from './pages/addmovie/AddMoviePage'; 
import MoviesPage from './pages/renderMovies/MoviesPage';
import MoviePage from './pages/movie/Moviepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes> {/* alla sidor kommer ha samma layout */}
      <Route path='/' element={<Layout />}>
        <Route index element= {<MoviesPage/>}></Route> {/* visar app som default, utan query */}
        <Route path='/login' element={<LoginPage/>}></Route> {/* path som leder till login sida */}
        <Route path='/addmovie' element={<AddMoviePage/>}></Route>
        <Route path='/movies' element={<MoviesPage/>}></Route>
        <Route path='/movies/:name' element={<MoviePage/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);


