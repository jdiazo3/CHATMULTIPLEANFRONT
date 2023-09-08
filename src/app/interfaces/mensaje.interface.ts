import { UsuarioInterface } from "./usuario.interface";

export interface Mensaje{
    id : number;
    mensaje : string;
    orden : number;
    usuario : UsuarioInterface;
    sender: boolean;
  }

  export class NewMensaje{
    id !: number;
    mensaje !: string;
    orden !: number;
    usuario !: String;
    sender !: boolean;
  }