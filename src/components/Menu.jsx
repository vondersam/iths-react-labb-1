import { useState } from 'react';
import SearchResults from './SearchResults';

const Menu = ({ setSearchText, books, loading }) => {
  const [valueText, setValueText] = useState('');

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
          {<SearchResults books={books} loading={loading} />}
        </div>
      </div>
    </div>
  );
};

export default Menu;
