"use client";
import { createContext, useState } from "react";

interface AppContextType {
  user: any;
  setUser: (user: any) => void;
}
const AppContext = createContext<undefined | AppContextType>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState();
  const value={ user, setUser}
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
