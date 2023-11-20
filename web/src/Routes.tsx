import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import Tutores from "./pages/Tutores/TutoresList/Tutores";
import TutoresNew from "./pages/Tutores/TutoresNew/TutoresNew";
//resolver id na rota editar

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tutores" element={<Tutores />} />
        <Route path="/novo-tutor" element={<TutoresNew />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
