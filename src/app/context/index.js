"use client";
import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [ShowNavModal, setShowNavModal] = useState(false);
  return <GlobalContext.Provider value={{ShowNavModal, setShowNavModal}}>{children}</GlobalContext.Provider>;
}
