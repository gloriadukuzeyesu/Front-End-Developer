import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './App';
import container from './container';
import SecondCounterContainer from './second_counter-container';
import MovieList from './movie.review/movie-list';

import reportWebVitals from './reportWebVitals';
import Container from './container';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MovieList />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
