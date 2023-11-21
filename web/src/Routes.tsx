import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import Tutores from "./pages/Tutores/TutoresList/ExibirTutores";
import TutoresNew from "./pages/Tutores/TutoresNew/CadastrarTutor";
import TutoresEdit from "./pages/Tutores/TutorEdit/EditarTutor";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tutores" element={<Tutores />} />
        <Route path="/novo-tutor" element={<TutoresNew />} />
        <Route path="/editar-tutor/:id" element={<TutoresEdit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
