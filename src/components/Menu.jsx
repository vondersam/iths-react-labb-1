import { useState, useEffect } from 'react';
import SearchResults from './SearchResults';
import formatSearchText from '../helpers/formatSearchText';

const Menu = ({ bookList, setBookList }) => {
  const [valueText, setValueText] = useState('');
  const [searchText, setSearchText] = useState('');
  const [searchBooks, setSearchBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadBooks() {
      setLoading(true);
      const formattedSearchText = formatSearchText(searchText);
      const results = await fetch(
        `https://openlibrary.org/search.json?q=${formattedSearchText}`
      );
      const data = await results.json();
      setSearchBooks(data.docs);
      setLoading(false);
    }
    loadBooks();
  }, [searchText]);

  const props = {
    searchBooks,
    loading,
    bookList,
    setBookList
  }

  return (
    <div className="row">
      <div className="col-4">
        <h3>Book Keep</h3>
        <p>Keep track of your books</p>
      </div>
      <div className="col-8">
        <div className="input-group">
          <input
            className="form-control border-secondary py-2"
            type="search"
            onChange={(e) => setValueText(e.target.value)}
            value={valueText}
            placeholder="Search for books that you want to add to your list"
          />
          <button
            onClick={() => setSearchText(valueText)}
            className="btn btn-outline-success"
          >
            Search
          </button>
          {<SearchResults {...props} />}
        </div>
      </div>
    </div>
  );
};

export default Menu;
