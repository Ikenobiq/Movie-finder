import HomePageGalleryItem from "../HomePageGalleryItem/HomePageGalleryItem";
import styles from "./HomePageGallery.module.css";
const HomePageGallery = ({ trending }) => {
  return (
    <main>
      <ul className={styles.list}>
        {trending.map((trends) => (
          <HomePageGalleryItem key={trends.id} trends={trends} />
        ))}
      </ul>
    </main>
  );
};
export default HomePageGallery;
