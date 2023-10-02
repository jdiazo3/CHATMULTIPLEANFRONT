import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { UsuarioInterface ,login, loginI, CreUsuarioInterface} from '../interfaces/usuario.interface';
import {  catchError, Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class UsuarioserviceService {

  apiUrl = 'http://localhost:8086/usuarios';

  constructor(private http: HttpClient,
              private jwtHelper: JwtHelperService ) { }
//login del sistema
  getLogin(login:login){
    return this.http.post<loginI>(this.apiUrl+"/auth",login).pipe(
      catchError((err: HttpErrorResponse) => {
        return this.errorUsuario(err)
      }))
 }
  //valida si el usuario esta logueado o si el token ya expiro
  isAuth(): boolean{
    const token = localStorage.getItem('token');
    if(!localStorage.getItem('token') || this.jwtHelper.isTokenExpired(String(token))){
      console.log("el token no esta o ya expiró");
      return false;
    }
    console.log("si esta y no a expirado");
    return true
  }


//captura los errores del login
errorUsuario(error: HttpErrorResponse): Observable<never>  {
  if (error.status == HttpStatusCode.NotFound)
    return throwError('Error en la autenticación');
  if (error.status == HttpStatusCode.InternalServerError)
    return throwError('Error en el servidor.');
  return throwError('Un error inesperado ha ocurrido.');
}
}
