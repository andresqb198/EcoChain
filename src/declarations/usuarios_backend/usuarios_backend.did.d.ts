import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'createAction' : ActorMethod<
    [string, string, string, string, string],
    bigint
  >,
  'createUser' : ActorMethod<
    [string, string, string, string, string, string, string, bigint, bigint],
    {
      'id' : Principal,
      'direccion' : string,
      'tokensPorValidar' : bigint,
      'alias' : string,
      'nombre' : string,
      'segundoApellido' : string,
      'primerApellido' : string,
      'tokensValidados' : bigint,
      'fechaNacimiento' : string,
      'cedula' : string,
    }
  >,
  'deleteUser' : ActorMethod<
    [string],
    {
        'Ok' : {
          'id' : Principal,
          'direccion' : string,
          'tokensPorValidar' : bigint,
          'alias' : string,
          'nombre' : string,
          'segundoApellido' : string,
          'primerApellido' : string,
          'tokensValidados' : bigint,
          'fechaNacimiento' : string,
          'cedula' : string,
        }
      } |
      { 'Err' : { 'UserDoesNotExist' : string } }
  >,
  'readActions' : ActorMethod<
    [],
    Array<
      {
        'nombre' : string,
        'idUsuario' : Principal,
        'clase' : string,
        'descripcion' : string,
        'fecha' : string,
      }
    >
  >,
  'readActionsByUser' : ActorMethod<
    [string],
    Array<
      {
        'nombre' : string,
        'idUsuario' : Principal,
        'clase' : string,
        'descripcion' : string,
        'fecha' : string,
      }
    >
  >,
  'readRandomAction' : ActorMethod<
    [],
    [] | [
      {
        'nombre' : string,
        'idUsuario' : Principal,
        'clase' : string,
        'descripcion' : string,
        'fecha' : string,
      }
    ]
  >,
  'readUserById' : ActorMethod<
    [string],
    [] | [
      {
        'id' : Principal,
        'direccion' : string,
        'tokensPorValidar' : bigint,
        'alias' : string,
        'nombre' : string,
        'segundoApellido' : string,
        'primerApellido' : string,
        'tokensValidados' : bigint,
        'fechaNacimiento' : string,
        'cedula' : string,
      }
    ]
  >,
  'readUsers' : ActorMethod<
    [],
    Array<
      {
        'id' : Principal,
        'direccion' : string,
        'tokensPorValidar' : bigint,
        'alias' : string,
        'nombre' : string,
        'segundoApellido' : string,
        'primerApellido' : string,
        'tokensValidados' : bigint,
        'fechaNacimiento' : string,
        'cedula' : string,
      }
    >
  >,
  'updateUser' : ActorMethod<
    [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      bigint,
      bigint,
    ],
    {
        'Ok' : {
          'id' : Principal,
          'direccion' : string,
          'tokensPorValidar' : bigint,
          'alias' : string,
          'nombre' : string,
          'segundoApellido' : string,
          'primerApellido' : string,
          'tokensValidados' : bigint,
          'fechaNacimiento' : string,
          'cedula' : string,
        }
      } |
      { 'Err' : { 'UserDoesNotExist' : string } }
  >,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
