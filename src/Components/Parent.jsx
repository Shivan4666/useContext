import React, { createContext } from "react";
import Child1 from "./Child1";
import "./Styles.css";

export const FirstName = createContext();
export const LastName = createContext();

const Parent = () => {
  return (
    <>
      <div>
        <FirstName.Provider value={"Shivani"}>
          <LastName.Provider value={"Nandanwar"}>
            <Child1 />
          </LastName.Provider>
        </FirstName.Provider>
      </div>
    </>
  );
};
export default Parent;
