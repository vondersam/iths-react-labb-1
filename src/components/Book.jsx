function Book({ title, author }) {
  return (
    <li>
      <div className="item">
        {title} - {author}
      </div>
    </li>
  );
}

export default Book;
