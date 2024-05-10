export interface Route {
  path: string;
  component: React.ReactNode;
}

export interface Login {
  alias: string;
  password: string;
}

export interface Register {
  nombre: string;
  primerApellido: string;
  segundoApellido: string;
  alias: string;
  cedula: string;
  fechaNacimiento: string;
  direccion: string;
  password: string;
}
