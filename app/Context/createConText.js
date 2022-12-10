import React, { useState, createContext, useContext, useEffect } from "react";

const VarContext = createContext();

export function useVarContext() {
  return useContext(VarContext);
}

export function CreateConText({ children }) {
  const [popUp, setPopUp] = useState(false);

  const handleOpenPopUp = () => setPopUp(true);
  const handleClosePopUp = () => setPopUp(false);

  // global variable
  const global = {
    popUp,
    handleOpenPopUp,
    handleClosePopUp,
  };
  //   console.log(popUp);
  return <VarContext.Provider value={global}>{children}</VarContext.Provider>;
}
