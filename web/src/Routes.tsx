import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import Tutores from "./pages/Tutores/TutoresList/Tutores";
import TutoresNew from "./pages/Tutores/TutoresNew/TutoresNew";
import EditTutor from "./pages/Tutores/TutorEdit/EditTutor";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tutores" element={<Tutores />} />
        <Route path="/novo-tutor" element={<TutoresNew />} />
        <Route path="/editar-tutor/:id" element={<EditTutor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
