import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  private urlApi = 'localhost:3000'
  
  constructor(private http: HttpClient) {
    this.obtener()
  }

  obtener() {
    this.http.get('http://localhost:3000/api/inventario').subscribe((data)=>{
      console.log(data)
    });
  }
}
