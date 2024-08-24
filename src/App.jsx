import { ToastContainer } from "react-toastify";
import Router from "./shared/Router";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router />
      <ToastContainer position="top-right" closeButton={false} autoClose={1500} hideProgressBar />
    </>
  );
}

export default App;
