export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'createAction' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [IDL.Int],
        [],
      ),
    'createUser' : IDL.Func(
        [
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Int,
          IDL.Int,
        ],
        [
          IDL.Record({
            'id' : IDL.Principal,
            'direccion' : IDL.Text,
            'tokensPorValidar' : IDL.Int,
            'alias' : IDL.Text,
            'nombre' : IDL.Text,
            'segundoApellido' : IDL.Text,
            'primerApellido' : IDL.Text,
            'tokensValidados' : IDL.Int,
            'fechaNacimiento' : IDL.Text,
            'cedula' : IDL.Text,
          }),
        ],
        [],
      ),
    'deleteUser' : IDL.Func(
        [IDL.Text],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Principal,
              'direccion' : IDL.Text,
              'tokensPorValidar' : IDL.Int,
              'alias' : IDL.Text,
              'nombre' : IDL.Text,
              'segundoApellido' : IDL.Text,
              'primerApellido' : IDL.Text,
              'tokensValidados' : IDL.Int,
              'fechaNacimiento' : IDL.Text,
              'cedula' : IDL.Text,
            }),
            'Err' : IDL.Variant({ 'UserDoesNotExist' : IDL.Text }),
          }),
        ],
        [],
      ),
    'readActions' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'nombre' : IDL.Text,
              'clase' : IDL.Text,
              'descripcion' : IDL.Text,
              'fecha' : IDL.Text,
            })
          ),
        ],
        ['query'],
      ),
    'readRandomAction' : IDL.Func(
        [],
        [
          IDL.Opt(
            IDL.Record({
              'nombre' : IDL.Text,
              'clase' : IDL.Text,
              'descripcion' : IDL.Text,
              'fecha' : IDL.Text,
            })
          ),
        ],
        ['query'],
      ),
    'readUserById' : IDL.Func(
        [IDL.Text],
        [
          IDL.Opt(
            IDL.Record({
              'id' : IDL.Principal,
              'direccion' : IDL.Text,
              'tokensPorValidar' : IDL.Int,
              'alias' : IDL.Text,
              'nombre' : IDL.Text,
              'segundoApellido' : IDL.Text,
              'primerApellido' : IDL.Text,
              'tokensValidados' : IDL.Int,
              'fechaNacimiento' : IDL.Text,
              'cedula' : IDL.Text,
            })
          ),
        ],
        ['query'],
      ),
    'readUsers' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Principal,
              'direccion' : IDL.Text,
              'tokensPorValidar' : IDL.Int,
              'alias' : IDL.Text,
              'nombre' : IDL.Text,
              'segundoApellido' : IDL.Text,
              'primerApellido' : IDL.Text,
              'tokensValidados' : IDL.Int,
              'fechaNacimiento' : IDL.Text,
              'cedula' : IDL.Text,
            })
          ),
        ],
        ['query'],
      ),
    'updateUser' : IDL.Func(
        [
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Int,
          IDL.Int,
        ],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Principal,
              'direccion' : IDL.Text,
              'tokensPorValidar' : IDL.Int,
              'alias' : IDL.Text,
              'nombre' : IDL.Text,
              'segundoApellido' : IDL.Text,
              'primerApellido' : IDL.Text,
              'tokensValidados' : IDL.Int,
              'fechaNacimiento' : IDL.Text,
              'cedula' : IDL.Text,
            }),
            'Err' : IDL.Variant({ 'UserDoesNotExist' : IDL.Text }),
          }),
        ],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
