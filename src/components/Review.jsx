import { useState } from 'react';

const Review = ({ read, setRead }) => {
  const [reviewText, setReviewText] = useState('');
  const handleReviewChange = (event) => {
    setReviewText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setRead(!read);
  };
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className="form-control"
        value={reviewText}
        onChange={handleReviewChange}
        placeholder="Add your review here"
      />
      <br />
      <button type="submit" className="btn btn-outline-success">
        Mark as {read ? 'to read' : 'read'}
      </button>
    </form>
  );
};

export default Review;
