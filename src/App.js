import { useEffect, useState } from 'react';
import BookList from './components/BookList';
import Menu from './components/Menu';
import formatSearchText from './helpers/formatSearchText';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    async function loadBooks() {
      setLoading(true);
      console.log(searchText);
      const formattedSearchText = formatSearchText(searchText);
      const results = await fetch(
        `https://openlibrary.org/search.json?q=${formattedSearchText}`
      );
      const data = await results.json();
      setBooks(data.docs);
      setLoading(false);
    }
    loadBooks();
  }, [searchText]);

  return (
    <div className="container mt-3">
      <Menu setSearchText={setSearchText} />
      {!loading && <BookList books={books} />}
      {loading && <div>Loading please wait...</div>}
    </div>
  );
}

export default App;
