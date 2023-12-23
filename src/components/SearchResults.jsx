import { useState } from 'react';

function SearchResults({ books }) {
  const [selectedBook, setSelectedBook] = useState('');
  const findBook = (bookID) => {
    return books.find((bookElement) => bookElement.key === bookID);
  };

  return (
    <select
      className="form-select"
      aria-label="Select a book to add to your list"
      onChange={(e) => {
        setSelectedBook(findBook(e.target.value));
      }}
      value={selectedBook}
    >
      {books.map((book) => (
        <option value={book.key}>
          {book.title} - {book.author_name}
        </option>
      ))}
    </select>
  );
}

export default SearchResults;
