import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home/Principal";
import Tutores from "./views/Tutor/ExibirTutores";
import TutoresNew from "./views/Tutor/CadastrarTutor";
import TutoresEdit from "./views/Tutor/EditarTutor";
import Animais from "./views/Animal/ExibirAnimais";
import AnimaisNew from "./views/Animal/CadastrarAnimal";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tutores" element={<Tutores />} />
        <Route path="/novo-tutor" element={<TutoresNew />} />
        <Route path="/editar-tutor/:id" element={<TutoresEdit />} />
        <Route path="/animais" element={<Animais />} />
        <Route path="/novo-animal" element={<AnimaisNew />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
