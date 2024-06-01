import { useEffect, useState } from "react";
import { restautantMenuUrl } from "./constants";

const useRestaurantMenu = (id) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  //

  const fetchData = async () => {
    const res = await fetch(restautantMenuUrl + id);
    const json = await res.json();

    setData(json);
  };

  //   console.log({ data } + "from custom");
  return data;
};

export default useRestaurantMenu;

// accordian
// higher-order-func
// contextApi for login
// redux for cart
// carousel
// filter,top rated,ssearch btns
