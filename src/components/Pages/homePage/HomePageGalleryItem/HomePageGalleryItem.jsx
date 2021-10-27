import { Link, useLocation } from "react-router-dom";
const HomePageGalleryItem = ({ trends }) => {
  const location = useLocation();
  return (
    <li>
      <Link
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
