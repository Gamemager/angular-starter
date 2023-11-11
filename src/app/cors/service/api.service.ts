import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private urlApi: string = 'https://nodejs-production-38f8.up.railway.app';

  constructor(private http: HttpClient) {
    this.obtener();
  }

  obtener() {
    this.http.get(`${this.urlApi}/api/inventario`).subscribe((data) => {
      console.log(data);
    });
  }

  create_user(data_user: any) {
    return this.http.post(`${this.urlApi}/api/usuarios`, data_user);
  }

  login(data_user: any) {
    return this.http.post(`${this.urlApi}/api/login`, data_user);
  }

  isAuthenticated(): boolean {
    const token = sessionStorage.getItem('token');
    return !!token;
  }
}
