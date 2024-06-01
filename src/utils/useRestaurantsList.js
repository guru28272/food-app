import { useEffect, useState } from "react";
import { listOfRestaurants } from "./constants";
const useRestaurantsList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(listOfRestaurants);

    const json = await res.json();

    // console.log(json);

    setData(json);
  };

  return data;
};
export default useRestaurantsList;
