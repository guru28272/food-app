import { useState, useEffect, useRef } from "react";

const FilterBtns = ({ data, setFilteredRes }) => {
  const [searchItem, setSearchItem] = useState("");
  const [fixedNav, setFixedNav] = useState(false);
  const btnRef = useRef(null);
  //   console.log(data);

  const handleScroll = () => {
    if (btnRef.current) {
      setFixedNav(btnRef.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // topRated;
  const topRated = () => {
    let arr = [...data].sort((a, b) => {
      return b.info.avgRating - a.info.avgRating;
    });

    // console.log(data);
    setFilteredRes(arr);
  };

  //   deliveryTime;
  const deliveryTime = () => {
    let arr = [...data].sort((a, b) => {
      return a.info.sla.slaString.localeCompare(b.info.sla.slaString);
    });

    setFilteredRes(arr);
  };

  //   fourPlus
  const fourPlus = () => {
    let arr = [...data].filter((item) => {
      if (item.info.avgRating > 4) {
        return item;
      }
    });

    setFilteredRes(arr);
  };

  //   defaultBtn
  const defaultBtn = () => {
    setFilteredRes(data);
  };

  //   handleSearch
  const handleSearch = () => {
    let arr = [...data].filter((item) => {
      if (item.info.name.toLowerCase().includes(searchItem.toLowerCase())) {
        return item;
      }
    });

    setFilteredRes(arr);
    setSearchItem("");
  };

  return (
    <div ref={btnRef}>
      <p className="mb-4 font-bold text-[1rem] sm:text-xl lg:text-2xl capitalize ">
        Restaurants with online food delivery in Chennai
      </p>

      <div
        className={
          fixedNav
            ? "border px-4  bg-white fixed top-0 left-[10%] right-[10%] sm:right-0 sm:left-0 z-10 mb-0 grid grid-cols-2 sm:grid-cols-6 gap-4 lg:grid-cols-6 lg:w-full place-content-center transition-[.4s] "
            : " mb-4 flex flex-col sm:flex-row gap-2"
        }
      >
        <button
          className="capitalize border border-gray-500 bg-gray-200 p-2 rounded-lg sm:text-[.75rem] "
          onClick={topRated}
        >
          top rated restaurants
        </button>
        <button
          className="capitalize border border-gray-500 bg-gray-200 p-2 rounded-lg sm:text-[.75rem]"
          onClick={deliveryTime}
        >
          delivery time
        </button>
        <button
          className="capitalize border border-gray-500 bg-gray-200 p-2 rounded-lg sm:text-[.75rem]"
          onClick={fourPlus}
        >
          ratings 4.0+
        </button>
        <button
          className="capitalize border border-gray-500 bg-gray-200 p-2 rounded-lg sm:text-[.75rem]"
          onClick={defaultBtn}
        >
          default
        </button>

        <input
          type="text"
          placeholder="search"
          className="border border-x-gray-300 rounded-lg sm:text-[.75rem] p-2"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <button
          className="capitalize border border-gray-500 bg-white p-2 rounded-lg sm:text-[.75rem]"
          onClick={handleSearch}
        >
          search
        </button>
      </div>
    </div>
  );
};
export default FilterBtns;
