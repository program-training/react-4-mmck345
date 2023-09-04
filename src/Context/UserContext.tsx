import { createContext, useEffect, useState } from "react";
import User from "../interfaces/interfaceUser";

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const UserContext = createContext<UserContextType | null>(null);

type UserContextProps = {
  children: React.ReactNode;
};

export default function UserContextProvider(props: UserContextProps) {
  const [user, setUser] = useState<User | null>(null);


  useEffect(() => {
    async function getUser() {
        const userFromServer = await (await fetch('https://jsonplaceholder.typicode.com/users/1')).json() as User;
        setUser(userFromServer);
    }
    getUser()
},[])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
