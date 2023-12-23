import { useState } from 'react';

function SearchResults({ searchBooks, loading }) {
  const [selectedBook, setSelectedBook] = useState('');
  const findBook = (bookID) => {
    return searchBooks.find((bookElement) => bookElement.key === bookID);
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
          : selectedBook !== ''
          ? `${selectedBook.title} - ${selectedBook.author_name}`
          : 'Select a book to add to your list'}
      </option>
      {searchBooks.map((book) => (
        <option key={book.key} value={book.key}>
          {book.title} - {book.author_name}
        </option>
      ))}
    </select>
  );
}

export default SearchResults;
