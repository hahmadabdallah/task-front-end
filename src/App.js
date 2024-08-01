
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GenrePage from './pages/GenrePage';
import ArtistDisplayPage from './pages/ArtistDisplayPage';
import ArtistChatPage from './pages/ArtistChatPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GenrePage />} />
        <Route path="/artists/:genre" element={<ArtistDisplayPage />} />
        <Route path="/artist/:id" element={<ArtistChatPage />} />
      </Routes>
    </Router>
  );
};

export default App;
