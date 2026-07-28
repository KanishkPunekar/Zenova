import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Manufacturing from "./pages/Manufacturing";
import Network from "./pages/Network";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="manufacturing" element={<Manufacturing />} />
        <Route path="network" element={<Network />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
