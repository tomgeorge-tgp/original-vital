import { createContext ,useContext } from "react";

const PopUpContext=createContext();

export const usePopUp = () => useContext(PopUpContext);

export default PopUpContext;