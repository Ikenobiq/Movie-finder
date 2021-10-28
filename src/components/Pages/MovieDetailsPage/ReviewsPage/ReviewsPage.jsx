import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../../fetch/Fetchtrending";
import styles from "./ReviewsPage.module.css";

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
    <ul className={styles.list}>
      {review.map((item) => (
        <li className={styles.item} key={item.id}>
          <p className={styles.author}>{item.author}</p>
          <p className={styles.review}>{item.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default ReviewsPage;
