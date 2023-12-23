import Book from './Book';

const BookList = ({ bookList }) => {
  return (
    <ul>
      {bookList.map((book) => {
        return <Book key={book.key} {...book} />;
      })}
    </ul>
  );
};
export default BookList;
