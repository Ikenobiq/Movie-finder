import { useEffect, useState } from "react";
import { fetchTrending } from "../../../fetch/Fetchtrending";
import HomePageGallery from "../HomePageGallery";
const HomePage = () => {
  const [trending, setTrendig] = useState([]);
  useEffect(() => {
    const getTrending = async () => {
      try {
        const results = await fetchTrending();
        setTrendig(results);
      } catch (error) {}
    };
    getTrending();
  }, []);

  return (
    <div>
      <HomePageGallery trending={trending} />
    </div>
  );
};
export default HomePage;
