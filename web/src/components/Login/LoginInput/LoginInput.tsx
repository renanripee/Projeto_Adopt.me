import "./LoginInput.css";

type LoginInputProps = {
  type: string;
  label: string;
  placeholder: string;
};

function LoginInput(props: LoginInputProps) {
  return (
    <div className="input-area">
      <label>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="input-login"
      />
    </div>
  );
}

export default LoginInput;
