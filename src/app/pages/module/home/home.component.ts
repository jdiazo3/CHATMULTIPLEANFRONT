import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Mensaje, NewMensaje } from 'src/app/interfaces/mensaje.interface';
import { roles } from 'src/app/interfaces/usuario.interface';
import { MensajeserviceService } from 'src/app/services/mensajeservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('chatDivElement') chatDivElement: ElementRef;
  messages!: Mensaje[];
  roles !: roles;
  newMensaje: NewMensaje = {} as NewMensaje;


  constructor(private router: Router,
    private mensajeService: MensajeserviceService
  ) {
    this.newMensaje.mensaje = "";
  }



ngAfterViewInit() {
  this.scrollToBottom();
  this.mensajeService.getMensaje()
  .subscribe(data => {
    this.messages = data.map(message => {
      const token = localStorage.getItem('token');
      this.roles = jwtDecode(String(token));
      if (this.roles.sub === message.usuario.user) {
            message.sender = true;

          } else {
            message.sender = false;

          }
          return message;
        });
      });

  }


  scrollToBottom() {

    const chatDiv = this.chatDivElement.nativeElement as HTMLDivElement;
    chatDiv.scrollTop = chatDiv.scrollHeight;

  }
  enviarMensaje() {
    const token = localStorage.getItem('token');
    this.roles = jwtDecode(String(token));
    this.newMensaje.usuario = this.roles.sub
    if (this.newMensaje.mensaje == "") {

    } else {
      this.mensajeService.newMensaje(this.newMensaje)
        .subscribe(date => {
          console.log("se guardo")
        });
      this.newMensaje.mensaje = "";
      this.scrollToBottom();
    }

  }

}
