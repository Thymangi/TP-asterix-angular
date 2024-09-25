import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { RouterModule } from '@angular/router'; // Assurez-vous que RouterModule est importé

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  imports: [CommonModule, RouterModule],
})
export class ProductComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id'); // Récupère l'ID depuis l'URL
    console.log('Product ID: ', productId); // Pour déboguer et vérifier que l'ID est bien récupéré
    if (productId) {
      this.productsService.getProduct(productId).subscribe((product) => {
        this.product = product;
        console.log('Product Data: ', this.product); // Pour vérifier que le produit est bien récupéré
      });
    }
  }
}
