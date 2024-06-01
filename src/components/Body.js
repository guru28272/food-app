import useRestaurantsList from "../utils/useRestaurantsList";
import Restaurants from "./Restaurants";
import Shimmer from "./Shimmer";
import WhatsOnYourMind from "./WhatsOnYourMind";
import TopRestaurantsChains from "./TopRestaurantsChains";

const Body = () => {
  const data = useRestaurantsList();

  // console.log(data);

  if (data === null) return <Shimmer />;

  return (
    <div className=" w-[80%] mx-auto">
      <WhatsOnYourMind data={data} />
      <TopRestaurantsChains data={data} />
      <Restaurants data={data} />
    </div>
  );
};
export default Body;
