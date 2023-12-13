import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './BookIndex.css';


const BookSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5240/api/Book/GetBook/${encodeURIComponent(searchTerm)}`);
      onSearch(response.data);
    } catch (error) {
      console.error('Error searching for books:', error.message);
      onSearch([]); 
    }
  };
  

  return (
    <div>
      <input
        type="text"
        placeholder="Search by book name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button 
      onClick={handleSearch}
       className="search-button" >
       <FontAwesomeIcon icon={faSearch}/> {' '}</button>
    </div>
  );
};

export default BookSearch;
