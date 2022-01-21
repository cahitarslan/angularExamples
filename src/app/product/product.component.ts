import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductRepository } from '../repository.model';

@Component({
  selector: 'app',
  templateUrl: 'product.component.html',
  // template: `
  //   <input [(ngModel)]="email" (keyup.enter)="onKeyUp2()" />
  //   <br />
  //   <span> {{ email }} </span>

  //   <h4>Lower-Upper-Title CasePipe</h4>
  //   <p>{{ title }}</p>
  //   <p>{{ title | lowercase }}</p>
  //   <p>{{ title | uppercase }}</p>
  //   <p>{{ title | titlecase }}</p>

  //   <h4>Date Pipe</h4>
  //   <p>{{ today }}</p>
  //   <p>{{ today | date }}</p>
  //   <p>{{ today | date: 'fullDate' }}</p>
  //   <p>{{ today | date: 'medium' }}</p>
  //   <p>{{ today | date: 'shortTime' }}</p>
  //   <p>{{ today | date: 'h:mm:ss' }}</p>

  //   <h4>Decimal Pipe</h4>
  //   <p>{{ students }}</p>
  //   <p>{{ students | number }}</p>
  //   <p>{{ price | number: '1.1-1' }}</p>

  //   <h4>Currency Pipe</h4>
  //   <p>{{ price | currency: 'EUR' }}</p>

  //   <h4>Percent Pipe</h4>
  //   <p>{{ completed | percent }}</p>
  //   <p>{{ completed | percent: '2.2-2' }}</p> -->

  //   {{ text | summary: 5 }}
  // `,
  styleUrls: ['product.component.css'],
})
export class ProductComponent {
  text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.';

  today: number = Date.now();
  title: string = 'Angular kursu';
  students: number = 21536;
  price: number = 395.9756;
  completed: number = 0.26;

  model: ProductRepository = new ProductRepository();
  product: Product = this.model.getProductById(1);
  disabled = true;

  productName: string = this.model.getProductById(1).name;

  getClasses(id: number): string {
    let product = this.model.getProductById(id);
    return (
      (product.price <= 1000 ? 'bg-info' : 'bg-secondary') +
      ' m-2 p-2 text-white'
    );
  }

  getClassMap(id: number): Object {
    let product = this.model.getProductById(id);
    return {
      'bg-info': product.price <= 1000,
      'bg-secondary': product.price > 1000,
      'text-center text-white': product.name == 'IPhone 7',
    };
  }

  color: string = this.model.getProductById(2).price <= 1000 ? 'green' : 'red';
  fontSize: string = '25px';

  getStyles(id: number) {
    let product = this.model.getProductById(id);
    return {
      fontSize: '25px',
      color: product.price <= 1000 ? 'green' : 'red',
    };
  }

  onSubmit(event: Event) {
    event.stopPropagation();
    console.log('button was clicked');
    console.log(event);
  }

  onDivClicked() {
    console.log('div was clicked');
  }

  onKeyUp(email: any) {
    console.log(email);
  }

  email: string = 'email@cahitarslan.com';

  onKeyUp2() {
    console.log(this.email);
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  addProduct() {
    this.model.addProduct(
      new Product(6, 'IPhone 13', 'iyi telefon', '6.jpg', 4000)
    );
  }

  deleteProduct(product: Product) {
    this.model.deleteProduct(product);
  }

  updateProduct(product: Product) {
    product.name = 'updated';
  }
}
