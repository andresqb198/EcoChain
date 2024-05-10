import style from "./auth.module.css";

const LoginModule = () => {
  return (
    <main className={style.Container}>
      <section className={style.MainSection}>
        <h1 className={style.Title}>Iniciar Sesión</h1>
        <form className={style.Form}>
          <div className="">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              className={style.Input}
              type="email"
              id="email"
              placeholder="jhon@email.com"
            />
          </div>
          <div className="">
            <label htmlFor="email" className="form-label">
              Password
            </label>
            <input
              className={style.Input}
              type="password"
              id="password"
              placeholder="********"
            />
          </div>
          <button className={style.Button}>Ingresar</button>
        </form>
      </section>
      <aside className={style.Aside}>
        <h1 className={style.AsideTitle}>EcoChain</h1>
      </aside>
    </main>
  );
};

export default LoginModule;
