import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import GoBack from "./components/GoBack";

import Home from "./pages/Home";
import BotList from "./pages/BotList";
import EnvList from "./pages/EnvList";
import GenerateDoc from "./pages/Doc";

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
        <Route path="/bots" element={<BotList />} />
        <Route path="/env" element={<EnvList />} />
        <Route path="/doc" element={<GenerateDoc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
