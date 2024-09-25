import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http'; // Importer HttpClientModule

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, FooterComponent, RouterModule, HttpClientModule], // Importer les composants standalone ici
})
export class AppComponent {
  title = 'asterix-angular-tp';
}
