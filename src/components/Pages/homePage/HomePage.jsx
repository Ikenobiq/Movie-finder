import { useEffect, useState } from "react";
import { fetchTrending } from "../../fetch/Fetchtrending";
import HomePageGallery from "./HomePageGallery/HomePageGallery";
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
      <h1>Trending today</h1>
      <HomePageGallery trending={trending} />
    </div>
  );
};
export default HomePage;
