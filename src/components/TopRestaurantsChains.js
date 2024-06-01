import RestaurantCard from "./RestaurantCard";

const TopRestaurantsChains = ({ data }) => {
  data =
    data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  const handlePrev = () => {
    let box = document.querySelector(".carausel-chain");
    let width = box.clientWidth / 2;
    box.scrollLeft = box.scrollLeft - width;
  };

  const handleNext = () => {
    let box = document.querySelector(".carausel-chain");
    let width = box.clientWidth / 2;
    box.scrollLeft = box.scrollLeft + width;
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold text-[1rem] sm:text-xl lg:text-2xl capitalize">
            Top restaurant chains in Chennai
          </p>
        </div>
        <div>
          <button onClick={handlePrev}>
            <span className="material-symbols-outlined text-[1.1rem] sm:text-3xl font-bold">
              chevron_left
            </span>
          </button>
          <button onClick={handleNext}>
            <span className="material-symbols-outlined text-[1.1rem] sm:text-3xl font-bold">
              navigate_next
            </span>
          </button>
          <button></button>
        </div>
      </div>

      <div className="carausel-chain mb-10 py-2 flex gap-6 lg:gap-8 overflow-hidden scroll-smooth">
        {data.map((item) => {
          return <RestaurantCard {...item} key={item.info.id} />;
        })}
      </div>
    </div>
  );
};
export default TopRestaurantsChains;
