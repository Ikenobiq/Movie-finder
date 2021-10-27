import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../shared/services/movies";
import styles from "./MovieDetailsPage.module.css";

const ReviewsPage = () => {
  const { id } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await getMovieReviews(id);
        console.log(data);
        setReview(data.results);
      } catch (error) {}
    };
    fetchMovie();
  }, [id]);

  if (!review.length) {
    return <p>No Reviews</p>;
  }
  return (
    <ul>
      {review.map((item) => (
        <li className={styles.ReviewItem} key={item.id}>
          <p>{item.author}</p>
          <p>{item.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default ReviewsPage;