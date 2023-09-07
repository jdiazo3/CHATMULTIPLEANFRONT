import { PersonaInterface } from "./persona.interface";

export interface UsuarioInterface {
    id : number;
    user : string;
    rol  : string;
    puntuacion : string;
    persona : string;
}

export class SetUsuarioInterface {
    id !: number;
    user !: string;
    rol  !: string;
    puntuacion !: string;
    persona !: PersonaInterface;
}

export class SSetUsuarioInterface {
    id !: number;
    user !: string;
    rol  !: string;
    puntuacion !: string;
    persona !: string;
}



export class SetUsuarioInterfacesin {
    usuario !: SetUsuarioInterface;
    numerodedias !: number;
}


export class login{
    user !: String;
    password !: String;
}

export interface loginI{
    jwt : jwt;
}

export class jwt{
    chars !: string;
    string !: string;
    valueType !: string;
}

export class roles{
    Rol!: string;
    exp!:number;
    iat!:number;
    sub!:string;
    id!:number;
}


export class CreUsuarioInterface {
    id !: number;
    user !: string;
    password  !: string;
    persona !: PersonaInterface;
}