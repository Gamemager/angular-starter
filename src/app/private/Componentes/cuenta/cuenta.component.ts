import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css'],
})
export class CuentaComponent {
  constructor(private router: Router) {}
  logout() {
    if (confirm('¿Está seguro que desea cerrar sesión?')) {
      sessionStorage.clear();
      this.router.navigate(['/public/acceder']);
    }
  }
}
