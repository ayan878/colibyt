import { createContext, useState } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [isDropDownHover, setIsDropDownHover] = useState(false);

  return (
    <Context.Provider value={{ isDropDownHover, setIsDropDownHover }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
