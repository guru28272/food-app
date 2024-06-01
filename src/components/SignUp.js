import { useContext, useState } from "react";
import close from "../img/close.png";
import { ContextProvider } from "../utils/context";

const SignUp = ({ setSignUp }) => {
  const [err, setErr] = useState(false);

  const {
    currState,
    setCurrState,
    user,
    setUser,
    loginUser,
    setLoginUser,
    users,

    setUsers,
  } = useContext(ContextProvider);

  // handleUser;
  const handleUser = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  //   handleSubmit
  const handleSubmit = () => {
    if (!user.name || !user.email || !user.password) {
      setErr(true);
      return;
    } else {
      setErr(false);
    }

    if (!user.email.includes("@gmail.com")) {
      setErr(true);
      return;
    } else {
      setErr(false);
    }

    // let id = crypto.randomUUID();
    setUsers([...users, { ...user, name: user.name.trim() }]);

    setCurrState("Login");

    setUser({ name: "", email: "", password: "" });
  };

  //   handleLogin
  const handleLogin = () => {
    let userRef = {};

    users.filter((u) => {
      if (u.email === user.email && u.password === user.password) {
        userRef = u;
        setLoginUser({ ...u });
      }
    });

    if (userRef && Object.entries(userRef).length === 0) {
      setErr(true);
      return;
    } else {
      setErr(false);
    }

    localStorage.setItem("user", JSON.stringify(userRef));

    setUser({ name: "", email: "", password: "" });

    setSignUp(false);

    setCurrState("Sign Up");
  };
  //

  //   console.log(users);
  //   console.log(loginUser);
  return (
    <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#00000090]  grid z-10">
      <div className="border border-red-600 w-[60%] mx-auto pb-4 px-4 place-self-center bg-white flex flex-col gap-4">
        <div className="flex justify-between">
          <p>{currState}</p>
          <img
            src={close}
            alt=""
            className="w-[24] cursor-pointer"
            onClick={() => setSignUp(false)}
          />
        </div>

        {err ? (
          <p className="first-letter:capitalize text-red-600 text-xs">
            enter valid name,email & password
          </p>
        ) : (
          ""
        )}

        <div className="  w-[250] mx-auto flex flex-col gap-4">
          {currState === "Sign Up" ? (
            <input
              type="text"
              name="name"
              value={user.name}
              placeholder="your name"
              required
              onChange={handleUser}
              className="border border-gray-400 outline-none p-2 rounded-md"
            />
          ) : (
            <></>
          )}

          <input
            type="email"
            name="email"
            value={user.email}
            placeholder="your email"
            required
            onChange={handleUser}
            className="border border-gray-400 outline-none p-2 rounded-md"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={user.password}
            required
            onChange={handleUser}
            className="border border-gray-400 outline-none p-2 rounded-md"
          />
        </div>

        {currState === "Sign Up" ? (
          <button
            className="border bg-gray-400 rounded-md w-[60%] mx-auto p-2"
            onClick={handleSubmit}
          >
            {currState}
          </button>
        ) : (
          <button
            className="border bg-gray-400 rounded-md w-[60%] mx-auto p-2"
            onClick={handleLogin}
          >
            {currState}
          </button>
        )}

        <div className="first-letter:capitalize mx-auto">
          {currState === "Sign Up" ? (
            <p>
              already have an account{" "}
              <span
                onClick={() => setCurrState("Login")}
                className="cursor-pointer text-blue-500"
              >
                click here
              </span>
            </p>
          ) : (
            <p>
              create an an account{" "}
              <span
                onClick={() => setCurrState("Sign Up")}
                className="cursor-pointer text-blue-500"
              >
                click here
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default SignUp;
