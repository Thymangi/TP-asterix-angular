import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router'; // Utilisé pour la gestion des routes
import { routes } from './app/app.routes'; // Importer les routes
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient()], // Fournit HttpClient pour toute l'application
}).catch((err) => console.error(err));
