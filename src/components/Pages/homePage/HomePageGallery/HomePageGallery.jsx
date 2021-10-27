import HomePageGalleryItem from "../HomePageGalleryItem/HomePageGalleryItem";

const HomePageGallery = ({ trending }) => {
  return (
    <main>
      <ul>
        {trending.map((trends) => (
          <HomePageGalleryItem key={trends.id} trends={trends} />
        ))}
      </ul>
    </main>
  );
};
export default HomePageGallery;
