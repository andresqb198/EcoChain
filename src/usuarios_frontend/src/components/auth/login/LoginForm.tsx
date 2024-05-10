import { useForm } from "react-hook-form";
import style from "../auth.module.css";
import { Login } from "../../../types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const { formState, handleSubmit, register } = useForm<Login>();

  const onSubmit = (data: Login) => {
    console.log(data);
    toast.success("Login exitoso");
  };

  return (
    <form className={style.Form} onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <label htmlFor="alias" className="form-label">
          Usuario
        </label>
        <input
          className={style.Input}
          type="text"
          id="alias"
          placeholder="JohnDoe"
          {...register("alias", {
            required: {
              value: true,
              message: "El usuario es requerido",
            },
          })}
        />
        {formState.errors.alias && (
          <span className={style.Error}>{formState.errors.alias?.message}</span>
        )}
      </div>
      <div className="">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          className={style.Input}
          type="password"
          id="password"
          placeholder="********"
          {...register("password", {
            required: {
              value: true,
              message: "La contraseña es requerida",
            },
          })}
        />
        {formState.errors.alias && (
          <span className={style.Error}>
            {formState.errors.password?.message}
          </span>
        )}
      </div>
      <button className={style.Button}>Ingresar</button>
    </form>
  );
};

export default LoginForm;
