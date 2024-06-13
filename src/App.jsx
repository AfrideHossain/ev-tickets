// app css
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import AuthContextProvider from "./context/AuthContextProvder";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  );
};

export default App;
