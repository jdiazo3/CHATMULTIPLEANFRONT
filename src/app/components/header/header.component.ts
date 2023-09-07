import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { roles } from 'src/app/interfaces/usuario.interface';
import { UsuarioserviceService } from 'src/app/services/usuarioservice.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  roles !: roles ;
  autoriza !:String;
  
  constructor(private router :Router,
              private usuarioserviceService : UsuarioserviceService) { }

  ngOnInit(): void {
    this.role();
  }
  //redireccionamiento de las rutas
  home(){
    this.router.navigate(['/home']);
  }

  coleccion(){
    this.router.navigate(['home/coleccion']);
  }
  
  Registrar(){
    this.router.navigate(['home/usuarios']);
  }

  videosmas(){
    this.router.navigate(['home/videosmasvistos']);
  }

  clientesmas(){
    this.router.navigate(['home/clientesmas']);
  }

  registrarvideo(){
    this.router.navigate(['home/registrarvideos']);
  }

  registrarcoleccion(){
    this.router.navigate(['home/coleccion']);
  }

  registrarPQR(){
    this.router.navigate(['home/PQRinsert']);
  }

  consultarPQR(){
    this.router.navigate(['home/PQRconsul']);
  }

  consultarClientesSin(){
    this.router.navigate(['home/clientessin']);
  }

  consultarReporteVideo(){
    this.router.navigate(['home/busquedavideo']);
  }

  eliminarVideos(){
    this.router.navigate(['home/eliminarVideos']);
  }

  buscarVideos(){
    this.router.navigate(['home/searchvi']);
  }

  //cierra la sesion y remueve el token
  cerrarSesion(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  //valida el rol del usuario y desactiva los modulos de la aplicación
  role(){
      const token = localStorage.getItem('token');
      const expectedRole = 'USER';
      console.log(token);
      if(token!=null){
        console.log("existe el token");
        this.roles = jwtDecode(String(token));
        console.log(this.roles.Rol);
          if(this.roles.Rol !== expectedRole || !this.usuarioserviceService.isAuth()){
            console.log("si tiene permisos");
            this.autoriza = "k";
            }
      }else{
        console.log("no tiene permisos");
        this.autoriza = "";
      }
  }
 

}
