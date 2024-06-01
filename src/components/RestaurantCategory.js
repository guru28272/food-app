import up from "../img/angle-up-solid.svg";
import down from "../img/angle-down-solid.svg";
import RestaurantCategoryItemList from "./RestaurantCategoryItemList";

const RestaurantCategory = ({
  item,
  showItem,
  setShowItem,
  setDisplayIndex,
}) => {
  const { itemCards, title } = item.card.card;

  return (
    <div className="border border-black w-9/12 mx-auto px-4 mb-4">
      <div className="flex justify-between items-center">
        <h3 className="font-bold">{title}</h3>
        <img
          src={showItem ? up : down}
          alt=""
          onClick={showItem ? setShowItem : setDisplayIndex}
          className="w-8"
        />
      </div>

      {showItem && <RestaurantCategoryItemList listItems={itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
