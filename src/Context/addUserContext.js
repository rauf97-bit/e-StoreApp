import { createContext, useReducer } from "react";
import { RegisteredData } from "./addUserReducer";

const INITIAL_STATE = {
  email: "",
  username: "",
  phonenumber: "",
  imageUrl: "",
};

export const AddUserContext = createContext(INITIAL_STATE);

export const AddUserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RegisteredData, INITIAL_STATE);

  const value = {
    email: state.email,
    username: state.username,
    phonenumber: state.phonenumber,
    imageUrl: state.imageUrl,
    dispatch,
  };
  return (
    <AddUserContext.Provider value={value}>{children}</AddUserContext.Provider>
  );
};
