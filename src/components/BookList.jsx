import Book from './Book';

const BookList = ({ bookList }) => {
  return (
    <ul>
      {bookList.map((book) => {
        return (
          <Book
            key={book.key}
            title={book.title}
            author_name={book.author_name}
            cover_edition_key={book.cover_edition_key}
          />
        );
      })}
    </ul>
  );
};
export default BookList;
