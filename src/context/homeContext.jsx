import { createContext, useEffect, useState } from "react";

export const HomeContext = createContext(null);
export const HomeContextProvider = (props) => {

  const contextValue = {
  
  };
  return (
    <HomeContext.Provider value={contextValue}>
      {props.children}
    </HomeContext.Provider>
  );
};
