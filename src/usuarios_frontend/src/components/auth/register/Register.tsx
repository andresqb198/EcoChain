import RegisterForm from "./RegisterForm";
import style from "../auth.module.css";

const RegisterModule = () => {
  return (
    <main className={style.Register}>
      <h1 className={style.Title}>Registrate</h1>
      <RegisterForm />
    </main>
  );
};

export default RegisterModule;
