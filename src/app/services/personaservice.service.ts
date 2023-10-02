import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { PersonaInterface, SetPersona } from '../interfaces/persona.interface';
import { CreUsuarioInterface } from 'src/app/interfaces/usuario.interface';
import { catchError, Observable } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaserviceService {

  apiUrl = 'http://localhost:8086/personas';

  constructor(private http: HttpClient) { }
  //trae los actores y productores
  getPersona() {
    return this.http.get<PersonaInterface[]>(this.apiUrl).pipe(
      catchError((err: HttpErrorResponse) => {
        return this.errorPersona(err)
      }))
 }
//crea la persona con su usuario
 createPersona(creUsuarioInterface : CreUsuarioInterface){
  return this.http.post<CreUsuarioInterface>(this.apiUrl,creUsuarioInterface).pipe(catchError(this.errorPersona));
 }


//captura los errores
errorPersona(error: HttpErrorResponse): Observable<never>  {
  if (error.status == HttpStatusCode.PreconditionFailed){
    return throwError('El username ya esta registrado');
  }
  if (error.status == HttpStatusCode.Forbidden)
    return throwError('La persona que lo referencio no esta registrada');
  if (error.status == HttpStatusCode.NotFound)
    return throwError('Ya estas Registrado');
  if (error.status == HttpStatusCode.InternalServerError)
    return throwError('Error en el servidor.');
  return throwError('Un error inesperado ha ocurrido.');
}
}

