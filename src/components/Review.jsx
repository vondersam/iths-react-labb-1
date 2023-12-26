import { useRef } from 'react';

const Review = ({ read, setRead }) => {
  const textRef = useRef('');
  const handleReviewChange = (event) => {
    textRef.current.value = event.target.value;
    textRef.current.placeholder = 'Add your review here';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRead(!read);
  };
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className="form-control"
        ref={textRef}
        onChange={handleReviewChange}
      />
      <br />
      <button type="submit" className="btn btn-outline-success">
        Mark as {read ? 'to read' : 'read'}
      </button>
    </form>
  );
};

export default Review;
