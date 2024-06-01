import { useEffect, useState } from "react";

const useWhatsOnYourMind = (id) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&collection=${id}&tags=layout_CCS_Chinese&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
    );
    const json = await res.json();

    setData(json);
  };

  return data;
};
export default useWhatsOnYourMind;
