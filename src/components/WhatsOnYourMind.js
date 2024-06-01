import { Link } from "react-router-dom";
import { imgUrl } from "../utils/constants";

const WhatsOnYourMind = ({ data }) => {
  // console.log(data);
  data = data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;

  const handlePrev = () => {
    let box = document.querySelector(".carausel-box");
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };

  const handleNext = () => {
    let box = document.querySelector(".carausel-box");
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };

  return (
    <div className="my-12">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold text-[1rem] sm:text-xl lg:text-2xl capitalize">
            whats on your mind
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

      <div className="carausel-box flex gap-4 overflow-x-hidden scroll-smooth">
        {data.map((item) => {
          const { imageId, id, entityId } = item;

          let collection_id;

          if (entityId.length > 5) {
            collection_id = [...entityId.split("=")][1].slice(0, 5);
            // console.log(collection_id);
          } else {
            collection_id = entityId;
          }

          return (
            <div
              className="img min-w-[100] max-w-[200] lg:min-w-[150] lg:max-w-[150]"
              key={id}
            >
              <Link to={"/collection/" + collection_id}>
                <div>
                  <img
                    src={imgUrl + imageId}
                    alt=""
                    className=" min-w-[100%] max-w-[100%]"
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default WhatsOnYourMind;

// try react slick
