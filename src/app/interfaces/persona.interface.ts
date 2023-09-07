export interface PersonaInterface{
  id: number;
  numdoc: number;
  nombre: string;
  apeper: string;
  tipodoc: string;
  correo: string;
}
export class SetPersona{
  id!: number;
  numdoc!: number;
  nombre!: string;
  apeper!: string;
  tipodoc!: string;
  correo!: string;
  refeporid!: number;   
  role!: string;
}
