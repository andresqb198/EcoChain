import LoginForm from "./LoginForm";
import style from "../auth.module.css";
import { ToastContainer } from "react-toastify";

const LoginModule = () => {
  return (
    <main className={style.Container}>
      <section className={style.MainSection}>
        <h1 className={style.Title}>Iniciar Sesión</h1>
        <LoginForm />
      </section>
      <aside className={style.Aside}>
        <h1 className={style.AsideTitle}>EcoChain</h1>
      </aside>
      <ToastContainer />
    </main>
  );
};

export default LoginModule;
