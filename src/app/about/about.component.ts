import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Importer HttpClientModule

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
