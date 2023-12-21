import { useEffect, useState } from 'react';
import BookList from './components/BookList';
import Menu from './components/Menu';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadBooks() {
    setLoading(true);
    // const results = await fetch(
    //   'https://openlibrary.org/search.json?title=Norwegian+Wood'
    // );
    // const data = await results.json();
    // setBooks(data.docs);
    setLoading(false);
  }
  useEffect(() => {
    loadBooks();
  }, []);
  return (
    <div className="container mt-3">
      <Menu />
      {!loading && <BookList books={books} />}
      {loading && <div>Loading please wait...</div>}
    </div>
  );
}

export default App;
