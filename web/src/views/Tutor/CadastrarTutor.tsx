import Header from "../../components/header/Header";
import TutorForm from "../../components/tutorForm/TutorForm";

function TutoresNew() {
  return (
    <div>
      <Header navigate={false} navigateText="CADASTRO DE TUTOR" />
      <TutorForm />
    </div>
  );
}

export default TutoresNew;
