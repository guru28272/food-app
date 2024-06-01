import { useParams } from "react-router-dom";
import useWhatsOnYourMind from "../utils/useWhatsOnYourMind";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";

const WhatsOnYourMindList = () => {
  const { collectionId } = useParams();

  let data = useWhatsOnYourMind(collectionId);
  //   console.log(data);

  if (data === null) return <Shimmer />;

  data = data?.data?.cards.slice(4, data.length);
  //   console.log(data);

  return (
    <div className="border border-black px-8 py-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8">
      {data.map((item) => {
        const { id } = item.card.card.info;
        // console.log(item.card.card);
        return <RestaurantCard {...item.card.card} key={id} />;
      })}
    </div>
  );
};
export default WhatsOnYourMindList;
