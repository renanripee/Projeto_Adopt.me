import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/home/Principal";
import Tutores from "./views/tutor/ExibirTutores";
import TutoresNew from "./views/tutor/CadastrarTutor";
import TutoresEdit from "./views/tutor/EditarTutor";
import Animais from "./views/animal/ExibirAnimais";
import AnimaisNew from "./views/animal/CadastrarAnimal";
import AnimaisEdit from "./views/animal/EditarAnimal";
import AdocaoList from "./views/adocao/ExibirAdocoes";

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
        <Route path="/editar-animal/:id" element={<AnimaisEdit />} />
        <Route path="/adocoes" element={<AdocaoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
