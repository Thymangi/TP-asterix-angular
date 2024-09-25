import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Utiliser RouterModule pour la navigation
import { HttpClientModule } from '@angular/common/http'; // Ajoutez ceci

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [RouterModule, HttpClientModule], // Importer RouterModule pour utiliser routerLink
})
export class HeaderComponent {}
