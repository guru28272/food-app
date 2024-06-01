import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import FilterBtns from "./FilterBtns";

const Restaurants = ({ data }) => {
  data =
    data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  // console.log(data);

  const [filteredRes, setFilteredRes] = useState(data);

  return (
    <div>
      <FilterBtns data={data} setFilteredRes={setFilteredRes} />
      <div className=" py-4 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8">
        {filteredRes.map((item) => {
          return <RestaurantCard {...item} key={item.info.id} />;
        })}
      </div>
    </div>
  );
};
export default Restaurants;
