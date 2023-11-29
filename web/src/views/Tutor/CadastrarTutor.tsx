import Header from "../../components/Header/Header";
import TutorForm from "../../components/TutorForm/TutorForm";

function TutoresNew() {
  return (
    <div>
      <Header navigate={false} navigateText="CADASTRO DE TUTOR" />
      <TutorForm />
    </div>
  );
}

export default TutoresNew;
