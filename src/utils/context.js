import { createContext, useState } from "react";
import { json } from "react-router-dom";

export const ContextProvider = createContext();

const Context = (props) => {
  const [isVeg, setIsVeg] = useState(false);
  const [isNonVeg, setIsNonVeg] = useState(false);
  const [category, setCategory] = useState("All");

  // user accout
  const [currState, setCurrState] = useState("Sign Up");
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [loginUser, setLoginUser] = useState(() => {
    let localVal = localStorage.getItem("user");
    if (!localVal) {
      return {};
    }
    return JSON.parse(localVal);
  });

  //   handleVeg
  const handleVeg = () => {
    setIsVeg(!isVeg);

    setCategory(isVeg ? "All" : "VEG");

    if (isNonVeg) return setIsNonVeg(false);
  };

  //   handleNonVeg
  const handleNonVeg = () => {
    setIsNonVeg(!isNonVeg);

    setCategory(isNonVeg ? "All" : "NONVEG");

    if (isVeg) return setIsVeg(false);
  };

  const contextValue = {
    isVeg,
    setIsVeg,
    isNonVeg,
    setIsNonVeg,
    category,
    setCategory,
    handleVeg,
    handleNonVeg,
    currState,
    setCurrState,
    user,
    setUser,
    loginUser,
    setLoginUser,
    users,
    setUsers,
  };
  return (
    <ContextProvider.Provider value={contextValue}>
      {props.children}
    </ContextProvider.Provider>
  );
};
export default Context;
