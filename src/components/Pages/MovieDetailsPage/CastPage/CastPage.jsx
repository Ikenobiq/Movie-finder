import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../../fetch/Fetchtrending";
import styles from "./CastPage.module.css";

const CastPage = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await getMovieCredits(id);
        setCast(data.cast);
      } catch (error) {}
    };
    fetchMovie();
  }, [id]);

  const imagePath = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <ul className={styles.list}>
        {cast.map((item) => (
          <li className={styles.item} key={item.id}>
            <img
              src={
                item.profile_path
                  ? imagePath + item.profile_path
                  : "Image not found"
              }
              alt="actor"
              width="300"
            />
            <p className={styles.nameItem}>{item.name}</p>
            <p className={styles.name}>
              Character:{" "}
              <span className={styles.character}>{item.character}</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CastPage;
