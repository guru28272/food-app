import logo from "../img/order-food.png";
import search from "../img/search.png";
import cart from "../img/shopping-cart.png";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../utils/context";

const Header = ({ setSignUp }) => {
  const { loginUser, setLoginUser } = useContext(ContextProvider);

  const handleLogOut = () => {
    setLoginUser({});

    localStorage.removeItem("user");
  };

  return (
    <div className=" bg-fuchsia-50 px-8 mb-4">
      <div className="flex flex-col items-center sm:flex-row justify-between">
        <Link to="/">
          <img src={logo} alt="" className="w-[100]" />
        </Link>

        <ul className="capitalize flex flex-col sm:flex-row  justify-between items-center gap-4">
          <li>
            <img src={search} alt="" className="w-6" />
          </li>

          <Link to="/">
            <li>home</li>
          </Link>

          <Link to="/contact">
            <li>contact-Us</li>
          </Link>

          <Link to="/cart">
            <li>
              <img src={cart} alt="" className="w-6" />
            </li>
          </Link>

          {loginUser && Object.entries(loginUser).length === 0 ? (
            <li
              className="border border-gray-400 rounded-lg px-4 py-1 font-bold cursor-pointer"
              onClick={() => setSignUp(true)}
            >
              Sign Up
            </li>
          ) : (
            <li
              className="border border-gray-400 rounded-lg px-4 py-1 font-bold cursor-pointer"
              onClick={handleLogOut}
            >
              Log Out
            </li>
          )}

          {loginUser && Object.entries(loginUser).length != 0 ? (
            <li>{loginUser.name}</li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};
export default Header;

/*

className={
              menu === "home"
                ? "border border-t-0 border-l-0 border-r-0 border-b-orange-950"
                : ""
            }

*/
