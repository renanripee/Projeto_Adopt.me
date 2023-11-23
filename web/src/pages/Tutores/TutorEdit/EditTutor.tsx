import Header from "../../../components/Header/Header";
import TutorForm from "../../../components/TutorForm/TutorForm";
import { useParams } from "react-router-dom";

function EditTutor() {
  let params = useParams();

  return (
    <div>
      <Header navigate={false} navigateText="EDIÇÃO DE TUTOR" />
      <TutorForm id={Number(params.id)} />
    </div>
  );
}

export default EditTutor;
