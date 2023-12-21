import Book from './Book';

function BookList({ books }) {
  return (
    <ul className="list-group">
      {books.map((book) => (
        <Book key={book.id} author={book.author_name} title={book.title} />
      ))}
    </ul>
  );
}

export default BookList;
