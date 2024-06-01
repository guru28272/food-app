import { useDispatch, useSelector } from "react-redux";
import { addCart, clearCart, removeCart } from "../utils/cartSlice";
import { imgUrl } from "../utils/constants";
import add from "../img/add.png";
import remove from "../img/remove.png";

const Cart = () => {
  const cartItems = Object.values(useSelector((store) => store.cart.items));
  // console.log(cartItems);

  // dispatch an action
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };

  const handleDel = (id) => {
    dispatch(removeCart(id));
  };

  const handleClr = () => {
    dispatch(clearCart());
  };

  const handleTotal = () => {
    let totalItem = 0;
    cartItems.map((item) => {
      item.defaultPrice
        ? (totalItem += (item.defaultPrice / 100) * item.quantity)
        : (totalItem += (item.price / 100) * item.quantity);
    });

    // console.log(totalItem);
    return totalItem;
  };

  return (
    <div>
      <div>
        {cartItems.map((item) => {
          // console.log(item);
          const {
            id,
            name,
            description,
            defaultPrice,
            price,
            imageId,
            rating,
            ratingCountV2,
          } = item;

          return (
            <div
              className=" w-9/12 mx-auto border-t-0 border-l-0 border-r-0 border-b-2 mb-4 pb-8 flex justify-between items-center"
              key={id}
            >
              <div className=" flex flex-col gap-2 flex-1 ">
                <h3>{name}</h3>
                {defaultPrice ? (
                  <p>
                    <b>RS.</b>
                    {defaultPrice / 100}.00
                  </p>
                ) : (
                  <p>
                    <b>RS.</b>
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

                {!item.id ? (
                  <button
                    className="border border-gray-500 absolute sm:bottom-[-12] sm:right-[25%] lg:bottom-[-15] lg:right-[15%] bg-white text-green-500 px-2 py-1 rounded-md"
                    onClick={() =>
                      handleAdd({ id, imageId, description, name, price })
                    }
                  >
                    Add
                  </button>
                ) : (
                  <div className=" w-[80] border-2 border-opacity-[.5] border-red-500 bg-slate-100 absolute sm:bottom-[-12] sm:right-[16%] lg:bottom-[-15] lg:right-[15%] rounded-md flex justify-between items-center">
                    <img
                      src={remove}
                      alt=""
                      className="w-5"
                      onClick={() => handleDel(id)}
                    />
                    <p className="">{item.quantity}</p>
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
        })}
      </div>

      {cartItems.length != 0 ? (
        <div className=" w-9/12 mx-auto border-t-0 border-l-0 border-r-0 border-b-2 mb-4 pb-8 flex flex-col gap-4">
          <button
            className="bg-violet-400 text-white p-2 w-[100] rounded-lg"
            onClick={handleClr}
          >
            clear cart
          </button>
          <h1>
            Sub-Total <b>RS.</b>
            <span>{handleTotal()}.00</span>
          </h1>

          <h1>
            Delivery-Fee <b>RS.</b>50.00
          </h1>

          <h1>
            Total <b>RS.</b>
            {handleTotal() + 50}.00
          </h1>

          <button className="capitalize bg-orange-500 w-[180] text-white p-2 rounded-lg">
            proceed to checkout
          </button>
        </div>
      ) : (
        <p className="text-xl capitalize">items are not added in cart </p>
      )}
    </div>
  );
};
export default Cart;
