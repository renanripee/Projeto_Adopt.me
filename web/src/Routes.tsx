import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home/Principal";
import Tutores from "./views/Tutor/ExibirTutores";
import TutoresNew from "./views/Tutor/CadastrarTutor";
import TutoresEdit from "./views/Tutor/EditarTutor";
import Animais from "./views/Animal/ExibirAnimais";
import AnimaisNew from "./views/Animal/CadastrarAnimal";
import AnimaisEdit from "./views/Animal/EditarAnimal";
import Adocao from "./views/Adocao/ExibirAdocoes";
import AdocaoEdit from "./views/Adocao/EditarAdocao";
import AdocaoNew from "./views/Adocao/CadastrarAdocao";

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
        <Route path="/adocoes" element={<Adocao />} />
        <Route path="/editar-adocao/:id" element={<AdocaoEdit />} />
        <Route path="/nova-adocao/:id" element={<AdocaoNew />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
