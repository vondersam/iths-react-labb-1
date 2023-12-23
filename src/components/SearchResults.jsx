import { useState } from 'react';

function SearchResults({ books, loading }) {
  const [selectedBook, setSelectedBook] = useState('');
  const findBook = (bookID) => {
    return books.find((bookElement) => bookElement.key === bookID);
  };

  return (
    <select
      className="form-select"
      onChange={(e) => {
        setSelectedBook(findBook(e.target.value));
      }}
      value={selectedBook}
    >
      <option value="">
        {loading
          ? 'Loading please wait...'
          : 'Select a book to add to your list'}
      </option>
      {books.map((book) => (
        <option key={book.key} value={book.key}>
          {book.title} - {book.author_name}
        </option>
      ))}
    </select>
  );
}

export default SearchResults;
