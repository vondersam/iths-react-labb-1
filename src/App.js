import { useState } from 'react';
import Menu from './components/Menu';
import BookList from './components/BookList';

function App() {
  const [bookList, setBookList] = useState([]);
  return (
    <div className="container mt-3">
      <Menu bookList={bookList} setBookList={setBookList} />
      <BookList bookList={bookList} />
    </div>
  );
}

export default App;
