import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',
})
export class SortByPricePipe implements PipeTransform {
  transform(products: any[], order: string = 'asc'): any[] {
    // Vérifier que la liste des produits n'est pas vide
    if (!products || products.length === 0) return products;

    // Vérifier que l'ordre est 'asc' ou 'desc', sinon utiliser 'asc' par défaut
    if (order !== 'asc' && order !== 'desc') {
      order = 'asc';
    }

    // Tri des produits en fonction du prix
    return products.sort((a, b) => {
      return order === 'asc' ? a.price - b.price : b.price - a.price;
    });
  }
}
