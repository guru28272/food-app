import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import Toggle from "./Toggle";

const RestaurantMenu = () => {
  const [showItem, setShowItem] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(null);

  const { resId, title } = useParams();

  const resInfo = useRestaurantMenu(resId);

  //
  if (resInfo === null) {
    return <Shimmer />;
  }

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        if (
          c.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) {
          return c;
        }
      }
    );
  //   console.log(categories);

  return (
    <div>
      <div className="  w-9/12  mx-auto  mb-4 capitalize">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <Toggle />
      </div>

      {categories.map((item, ind) => {
        const { title } = item.card.card;

        return (
          <RestaurantCategory
            item={item}
            key={title}
            showItem={ind === displayIndex ? true : false}
            setShowItem={() => {
              setShowItem(!showItem);
              setDisplayIndex(null);
            }}
            setDisplayIndex={() => setDisplayIndex(ind)}
          />
        );
      })}
    </div>
  );
};
export default RestaurantMenu;
