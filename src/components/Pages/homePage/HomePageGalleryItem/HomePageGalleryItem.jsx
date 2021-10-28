import { Link, useLocation } from "react-router-dom";
import styles from "./HomePageGalleryItem.module.css";

const HomePageGalleryItem = ({ trends }) => {
  const location = useLocation();
  return (
    <li className={styles.item}>
      <Link
        className={styles.link}
        to={{
          pathname: `/movies/${trends.id}`,
          state: {
            from: location,
          },
        }}>
        {trends.original_title || trends.name}
      </Link>
    </li>
  );
};
export default HomePageGalleryItem;
