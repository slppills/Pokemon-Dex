import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Dex from "../pages/Dex/Dex";
import Layout from "./Layout";
import Dashboard from "../pages/PokemonDetail/PokemonDetail";
import { Provider } from "react-redux";
import store from "../redux/config/configStore";

const Router = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dex" element={<Dex />} />
            <Route path="/pokemon-detail" element={<Dashboard />} />
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
};

export default Router;
