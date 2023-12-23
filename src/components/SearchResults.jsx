import { useState } from 'react';

function SearchResults({ searchBooks, loading, bookList, setBookList }) {
  const [selectedBook, setSelectedBook] = useState('');
  const findBook = (bookID) => {
    return searchBooks.find((bookElement) => bookElement.key === bookID);
  };
  const addBook = (foundBook) => {
    // Don't add an empty selectedBook
    if (selectedBook === '') {
      return bookList;
    }
    const found = bookList.find(
      (bookElement) => bookElement.key === selectedBook.key
    );
    if (!found) {
      return [...bookList, selectedBook];
    }
  };

  const handleChange = (e) => {
    const foundBook = findBook(e.target.value);
    setSelectedBook(foundBook);
  };

  return (
    <>
      <select
        className="form-select"
        onChange={(e) => handleChange(e)}
        value={selectedBook}
      >
        <option value={selectedBook}>
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
      <button
        onClick={() => setBookList(addBook())}
        className="btn btn-outline-success"
      >
        Add
      </button>
    </>
  );
}

export default SearchResults;
