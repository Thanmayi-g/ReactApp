import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavbar from './Books/Navbar';
import BookIndex from './Books/BookIndex';
import BookForm from './Books/BookForm';
import Home from './Books/Home';

const App = () => {
  return (
    <Router>
    <AppNavbar/>
      <Routes>
      <Route path="/" element={<BookIndex />} />
        <Route path="/add-book" element={<BookForm />} />
        <Route path="/home" element={<Home />} />
        
      </Routes>
    </Router>
  );
};

export default App;
