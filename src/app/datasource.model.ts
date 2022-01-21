import { Product } from './product.model';

export class SimpleDataSource {
  private products: Product[];

  constructor() {
    this.products = new Array<Product>(
      new Product(1, 'IPhone 6', 'iyi telefon', '1.jpg', 1000),
      new Product(2, 'IPhone 7', 'iyi telefon', '2.jpg', 1500),
      new Product(3, 'IPhone 8', 'iyi telefon', '3.jpg', 2000),
      new Product(4, 'IPhone X', 'iyi telefon', '4.jpg', 2500),
      new Product(5, 'IPhone 12', 'iyi telefon', '5.jpg', 3000)
    );
  }

  getProducts(): Product[] {
    return this.products;
  }
}
