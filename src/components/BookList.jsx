import Book from './Book';

const BookList = ({ bookList }) => {
  return (
    <div class="row row-cols-1 row-cols-md-3 g-4">
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
    </div>
  );
};
export default BookList;
