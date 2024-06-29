import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/Home/Home";
import GoBack from "./components/goback";

function Layout() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      {location.pathname !== "/" && <GoBack />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bots" element={<div>Bots</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
