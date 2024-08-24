import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Dex from "../pages/Dex/Dex";
import Layout from "./Layout";
import Dashboard from "../components/Dashboard/Dashboard";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/pokemon-detail" element={<Dashboard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
