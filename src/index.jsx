import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';

import Book from './Book';
import { books } from './books';

const App = () => {
  return (
    <>
      <header className="header">
        <h1>Moje knihovnička</h1>
        <div className="icon">
          <img src="/assets/book.svg" alt="" />
        </div>
      </header>

      <div className="library">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            year={book.year}
            cover={book.cover}
            read={book.read}
          />
        ))}
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
