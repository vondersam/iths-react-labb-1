function Book({ title, author_name, id, cover_edition_key }) {
  return (
    <div className="card mb-3" style={{ maxWidth: '340px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={`https://covers.openlibrary.org/b/olid/${cover_edition_key}-M.jpg`}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{author_name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
