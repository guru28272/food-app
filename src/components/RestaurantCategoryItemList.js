import { useDispatch, useSelector } from "react-redux";
import { imgUrl } from "../utils/constants";
import { addCart, removeCart, clearCart } from "../utils/cartSlice";
import add from "../img/add.png";
import remove from "../img/remove.png";
import { useContext } from "react";
import { ContextProvider } from "../utils/context";

const RestaurantCategoryItemList = ({ listItems }) => {
  // console.log(listItems);

  const { category } = useContext(ContextProvider);

  const cartItems = useSelector((store) => store.cart.items);

  // dispatch an action
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };

  const handleDel = (id) => {
    dispatch(removeCart(id));
  };

  //
  return (
    <div>
      {listItems.map((item) => {
        //
        const {
          id,
          imageId,
          description,
          name,
          defaultPrice,
          finalPrice,
          price,
          ratings: {
            aggregatedRating: { rating, ratingCountV2 },
          },
          itemAttribute: { vegClassifier },
        } = item.card.info;
        //

        if (category === "All" || category === vegClassifier) {
          return (
            <div
              className=" border-t-0 border-l-0 border-r-0 border-b-2 mb-4 pb-8 flex justify-between items-center"
              key={id}
            >
              <div className=" flex flex-col gap-2 flex-1 ">
                <h3>{name}</h3>
                {defaultPrice ? (
                  <p>
                    <b>Rs</b>
                    {defaultPrice / 100}.00
                  </p>
                ) : (
                  <p>
                    <b>Rs</b>
                    {price / 100}.00
                  </p>
                )}
                <p>
                  {rating}

                  {ratingCountV2 ? <span>({ratingCountV2})</span> : ""}
                </p>
                <p className="lg:w-[60ch]">{description}</p>
              </div>

              <div className=" flex justify-end flex-1 relative">
                <img
                  src={imgUrl + imageId}
                  alt=""
                  className=" w-[150]  lg:w-[180] rounded-lg"
                />

                {!cartItems[id] ? (
                  <button
                    className="border border-gray-500 absolute sm:bottom-[-12] sm:right-[25%] lg:bottom-[-15] lg:right-[15%] bg-white text-green-500 px-2 py-1 rounded-md"
                    onClick={() =>
                      handleAdd({
                        id,
                        imageId,
                        description,
                        name,
                        defaultPrice,
                        price,
                        rating,
                        ratingCountV2,
                      })
                    }
                  >
                    Add
                  </button>
                ) : (
                  <div className=" w-[80] border-2 border-opacity-5 border-red-400 bg-slate-100 absolute sm:bottom-[-12] sm:right-[16%] lg:bottom-[-15] lg:right-[15%] rounded-md flex justify-between items-center">
                    <img
                      src={remove}
                      alt=""
                      className="w-5"
                      onClick={() => handleDel(id)}
                    />
                    <p className="">{cartItems[id].quantity}</p>
                    <img
                      src={add}
                      alt=""
                      className="w-5"
                      onClick={() => handleAdd({ id })}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
export default RestaurantCategoryItemList;
