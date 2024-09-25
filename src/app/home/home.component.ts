import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CommonModule } from '@angular/common'; // Importer CommonModule pour les pipes comme 'currency'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; // Ajouter RouterModule

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, HttpClientModule, RouterModule],
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  selectedProduct: any = null; // Variable pour vérifier si un produit est sélectionné

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  onSearch(event: any): void {
    const searchValue = event.target.value.toLowerCase();
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(searchValue)
    );
  }

  onSort(event: any): void {
    const sortOrder = event.target.value;
    if (sortOrder === 'asc') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    }
  }
}
