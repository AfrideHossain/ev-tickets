import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvder";

const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};

export default useAuthContext;
