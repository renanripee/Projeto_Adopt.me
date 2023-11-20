import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import Tutores from "./pages/Tutores/TutoresList/Tutores";
//resolver id na rota editar

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tutores" element={<Tutores />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
