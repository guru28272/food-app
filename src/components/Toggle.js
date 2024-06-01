import { useContext } from "react";
import { ContextProvider } from "../utils/context";

const Toggle = () => {
  const { isVeg, isNonVeg, handleVeg, handleNonVeg } =
    useContext(ContextProvider);

  return (
    <div className="flex gap-4">
      <div
        className={
          isVeg
            ? "border bg-green-500 w-[60] h-[30] rounded-full p-1"
            : "border bg-gray-200 w-[60] h-[30] rounded-full p-1 "
        }
        onClick={handleVeg}
      >
        {isVeg ? (
          <p className="w-[50%] h-[100%] bg-white rounded-full translate-x-[100%] transition-all duration-300"></p>
        ) : (
          <p className="w-[50%] h-[100%] bg-green-500 rounded-full transition-all duration-300"></p>
        )}
      </div>

      <div
        className={
          isNonVeg
            ? "border bg-red-500 w-[60] h-[30] rounded-full p-1"
            : "border bg-gray-200 w-[60] h-[30] rounded-full p-1 "
        }
        onClick={handleNonVeg}
      >
        {isNonVeg ? (
          <p className="w-[50%] h-[100%] bg-white rounded-full translate-x-[100%] transition-all duration-300"></p>
        ) : (
          <p className="w-[50%] h-[100%] bg-red-500 rounded-full transition-all duration-300"></p>
        )}
      </div>
    </div>
  );
};
export default Toggle;
