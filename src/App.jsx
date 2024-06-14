// app css
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import AuthContextProvider from "./context/AuthContextProvder";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        {/* react toast */}
        <ToastContainer />
        <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  );
};

export default App;
