import { useForm } from "react-hook-form";
import style from "../auth.module.css";
import { Register } from "../../../types";

const RegisterForm = () => {
  const { formState, register, handleSubmit } = useForm<Register>();
  const onSubmit = (data: Register) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${style.RegisterForm}`}>
      <div className="">
        <label htmlFor="nombre" className="form-label">
          Nombres
        </label>
        <input
          className={style.Input}
          type="text"
          id="nombre"
          placeholder="Juan Carlos"
          {...register("nombre", {
            required: {
              value: true,
              message: "El campo nombre es requerido",
            },
          })}
        />
        {formState.errors.nombre && (
          <span className={style.Error}>
            {formState.errors.nombre?.message}
          </span>
        )}
      </div>
      <div className={style.ContainerInputs}>
        <div className="">
          <label htmlFor="primerApellido" className="form-label">
            Primer Apellido
          </label>
          <input
            className={style.Input}
            type="text"
            id="primerApellido"
            placeholder="Ramirez"
            {...register("primerApellido", {
              required: {
                value: true,
                message: "El campo es requerido",
              },
            })}
          />
          {formState.errors.primerApellido && (
            <span className={style.Error}>
              {formState.errors.primerApellido?.message}
            </span>
          )}
        </div>
        <div className="">
          <label htmlFor="segundoApellido" className="form-label">
            Segundo Apellido
          </label>
          <input
            className={style.Input}
            type="text"
            id="segundoApellido"
            placeholder="Gomez"
            {...register("segundoApellido", {
              required: {
                value: true,
                message: "El campo es requerido",
              },
            })}
          />
          {formState.errors.segundoApellido && (
            <span className={style.Error}>
              {formState.errors.segundoApellido?.message}
            </span>
          )}
        </div>
      </div>
      <div className={style.ContainerInputs}>
        <div className="">
          <label htmlFor="cedula" className="form-label">
            Cédula
          </label>
          <input
            className={style.Input}
            type="text"
            id="cedula"
            placeholder="100101010"
            {...register("cedula", {
              required: {
                value: true,
                message: "La cédula es obligatoria",
              },
            })}
          />
          {formState.errors.cedula && (
            <span className={style.Error}>
              {formState.errors.cedula?.message}
            </span>
          )}
        </div>
        <div className="">
          <label htmlFor="fechaNacimiento" className="form-label">
            Fecha de Nacimiento
          </label>
          <input
            className={style.Input}
            type="date"
            id="fechaNacimiento"
            {...register("fechaNacimiento", {
              required: {
                value: true,
                message: "La fecha de nacimiento es obligatoria",
              },
            })}
          />
          {formState.errors.fechaNacimiento && (
            <span className={style.Error}>
              {formState.errors.fechaNacimiento?.message}
            </span>
          )}
        </div>
      </div>
      <div className={style.ContainerInputs}>
        <div className="">
          <label htmlFor="alias" className="form-label">
            Alias
          </label>
          <input
            className={style.Input}
            type="text"
            id="alias"
            placeholder="Juanito123"
            {...register("alias", {
              required: {
                value: true,
                message: "El campo es obligatorio",
              },
              pattern: {
                value: /^[a-zA-Z0-9]*$/,
                message: "El alias solo puede contener letras y números",
              },
            })}
          />
          {formState.errors.alias && (
            <span className={style.Error}>
              {formState.errors.alias?.message}
            </span>
          )}
        </div>
        <div className="">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            className={style.Input}
            type="password"
            id="password"
            placeholder="*****"
            {...register("password", {
              required: {
                value: true,
                message: "La contraseña es obligatoria",
              },
              minLength: {
                value: 4,
                message: "La contraseña debe tener al menos 4 caracteres",
              },
            })}
          />
          {formState.errors.password && (
            <span className={style.Error}>
              {formState.errors.password?.message}
            </span>
          )}
        </div>
      </div>
      <div className="">
        <label htmlFor="direccion" className="form-label">
          Dirección
        </label>
        <input
          className={style.Input}
          type="text"
          id="direccion"
          placeholder="Calle 123 # 123-123, Medellín, Colombia"
          {...register("direccion", {
            required: {
              value: true,
              message: "La dirección es obligatoria",
            },
          })}
        />
        {formState.errors.direccion && (
          <span className={style.Error}>
            {formState.errors.direccion?.message}
          </span>
        )}
      </div>
      <button className={style.Button}>Registrarse</button>
    </form>
  );
};

export default RegisterForm;
