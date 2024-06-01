import { Link } from "react-router-dom";
import { imgUrl } from "../utils/constants";
import star from "../img/star.png";

const RestaurantCard = (props) => {
  //

  // console.log(props);

  const {
    aggregatedDiscountInfoV3,
    areaName,
    avgRating,
    cloudinaryImageId,
    name,
    id,
    cuisines,
    sla: { slaString: deliveryTime },
  } = props.info;

  const { header, subHeader } = aggregatedDiscountInfoV3 ?? "";

  return (
    <div className="border border-gray-400 rounded-xl mx-auto p-2 min-w-[200] max-w-[200] sm:min-w-[230] sm:max-w-[230] lg:min-w-[250] lg:max-w-[250]">
      <Link to={"/restaurants/" + id + "/" + name}>
        <div className="relative">
          <p className="absolute w-[100%]  sm:h-[180] lg:h-[180] rounded-xl bg-gradient-to-t from-black  to-transparent "></p>

          <img
            src={imgUrl + cloudinaryImageId}
            alt=""
            className="
            w-[100%] min-w-[100%] max-w-[100%]  sm:h-[180] lg:h-[180] rounded-xl "
          />

          <p className="absolute left-2 bottom-2 font-extrabold text-xl text-white">
            {header} <span>{subHeader}</span>
          </p>
        </div>

        <div className="  sm:h-[145] flex flex-col justify-between">
          <h2 className="font-bold">{name}</h2>
          <div className=" flex gap-x-4">
            <div className="flex items-center gap-1">
              <img src={star} alt="" className="w-[1rem] h-[1rem]" />
              <h3>{avgRating}</h3>
            </div>
            <h3>{deliveryTime}</h3>
          </div>
          <p className="max-w-50">{cuisines.join(", ")}</p>
          <p>{areaName}</p>
        </div>
      </Link>
    </div>
  );
};
export default RestaurantCard;
