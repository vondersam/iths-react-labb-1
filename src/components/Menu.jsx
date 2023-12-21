import { useState } from 'react';

const Menu = () => {
  const [searchText, setSearchText] = useState('');
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
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
            placeholder="Search for books that you want to add to your list"
          />
          <button className="btn btn-outline-success" type="button">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
