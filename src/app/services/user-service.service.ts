import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  IdArea: number;
  usuario: string;
  contrasena: string;
  nombre: string;
  apellido: string;
  documento: string;
  telefono: string;
  correo: string;
  nombrerol: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://soli-iub-fastapi.onrender.com/get_users/'; 
  constructor(private http: HttpClient) {}

  getUsers(): Observable<{ resultado: User[] }> {  
    return this.http.get<{ resultado: User[] }>(this.apiUrl);
  }
  // Método para obtener el usuario por ID
  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/get_user/${userId}`);
  }

  // Método para actualizar el usuario
  updateUser(userId: number, userData: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/update_user/${userId}`, userData);
  }
}
