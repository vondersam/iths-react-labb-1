import { useEffect, useState } from 'react';
import './App.css';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadBooks() {
    setLoading(true);
    const results = await fetch(
      'https://openlibrary.org/search.json?title=Norwegian+Wood'
    );
    const data = await results.json();
    setBooks(data.docs);
    setLoading(false);
  }
  useEffect(() => {
    loadBooks();
  }, []);
  return (
    <div className="App">
      <h1>Book Keep</h1>
      <p>Keep track of your books</p>
      {!loading && <BookList books={books} />}
      {loading && <div>Loading please wait...</div>}
    </div>
  );
}

export default App;
