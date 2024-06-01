import { Provider } from "react-redux";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import appStore from "./utils/appStore";
import Context from "./utils/context";
import { useEffect, useState } from "react";
import SignUp from "./components/SignUp";

const App = () => {
  const [signUp, setSignUp] = useState(false);

  return (
    <Provider store={appStore}>
      <Context>
        <div className=" w-[90%] mx-auto">
          {signUp ? <SignUp setSignUp={setSignUp} /> : <></>}
          <Header setSignUp={setSignUp} />
          <Outlet />
        </div>
      </Context>
    </Provider>
  );
};
export default App;
