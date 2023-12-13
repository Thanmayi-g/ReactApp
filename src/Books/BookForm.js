import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const BookForm = ({ onAddBook }) => {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    BookName: '',
    PublishedOn: '',
    Language: '',
    Genre: '',
    PublicationId: 0,
    AuthorId: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };
const handleClose=(e)=>{
  e.preventDefault();
  navigate("/");
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Before Axios request');
    try {
    
      const formattedBook = { ...book, PublishedOn: new Date(book.PublishedOn) };
      const response = await axios.post('http://localhost:5240/api/Book/Create', formattedBook);
      console.log(response.data);
      console.log('Book added successfully:', response.data);
      setBook({
        BookName: '',
        PublishedOn: '',
        Language: '',
        Genre: '',
        PublicationId: 0,
        AuthorId: 0,
      });
      console.log('State after clearing:', book);
      navigate('/');
  
   } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        
      <br />
      <label>
        Book Name:
        <input
          type="text"
          name="BookName"
          value={book.BookName}
          onChange={handleChange}
          className="form-control"
          required
        />
      </label>
      <br />
      <label>
        Published On:
        <input
          type="datetime-local"
          name="PublishedOn"
          value={book.PublishedOn}
          onChange={handleChange}
          className="form-control"
          required
        />
      </label>
      <br />
      <label>
        Language:
        <input
          type="text"
          name="Language"
          value={book.Language}
          onChange={handleChange}
          className="form-control"
          required
        />
      </label>
      <br />
      <label>
        Genre:
        <input
          type="text"
          name="Genre"
          value={book.Genre}
          onChange={handleChange}
          className="form-control"
          required
        />
      </label>
      <br />
      <label>
       Publication ID:
        <select
         name="PublicationId"
         value={book.PublicationId || ''}
         onChange={handleChange}
         className="form-control"
         required
         >
         <option value="" disabled>Select a Publishing Company Name</option>
         <option value="1">Book Company</option>
         <option value="2">Indian Company</option>
         </select>
          {book.AuthorId === '' && <span style={{ color: 'red' }}>Publishing Company Name is required</span>}
      </label>
      <br />
      <label>
            Author ID:
          <select
            name="AuthorId"
            value={book.AuthorId || ''}
            onChange={handleChange}
            className="form-control"
            required
          >
          <option value="" disabled>Select an author</option>
          <option value="1">J.K Rowling</option>
          <option value="2">Sidney Sheldon</option>
          <option value="3">Eiichrio Oda</option>
          <option value="4">Rabindranath Tagore</option>
          </select>
        {book.AuthorId === '' && <span style={{ color: 'red' }}>Author Name is required</span>}
      </label>
      <br /><br/>
      <button type="submit" className="btn btn-primary">
        Add 
      </button>
      <button type="submit" className="btn btn-warning" onClick={handleClose}>
        Cancel
      </button>
    </form>
    
  );
};

export default BookForm;


