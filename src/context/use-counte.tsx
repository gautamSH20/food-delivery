import { createContext, useState } from "react";

type UserContextType = {
  user: number;
  increment: () => void;
  decrement: () => void;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: any) => {
  const [user, setUser] = useState(0);

  const increment = () => {
    setUser((e) => (e = e + 1));
  };
  const decrement = () => {
    setUser((e) => (e -= 1));
  };

  const contextValue = {
    user,
    increment,
    decrement,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
