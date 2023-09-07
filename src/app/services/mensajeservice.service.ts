import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeserviceService {
  apiUrl = 'http://localhost:8086/mensajes';
  constructor(private http: HttpClient) { }
}
