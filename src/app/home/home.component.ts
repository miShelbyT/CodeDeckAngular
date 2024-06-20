import { ProductComponent } from './../components/product/product.component';
import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service'
import { Products, Product } from '../../types'
import { CommonModule } from '@angular/common'
// the above common module allows us to use ngFor and other common Angular functions


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private productsService: ProductsService){ }

  products: Product[] = [];

  onProductOutput(product: Product) {
    console.log(product, 'Output')
  }
  
  ngOnInit() {
    this.productsService
    .getProducts('http://localhost:3000/clothes', { page: 0, perPage: 5 })
    .subscribe((products: Products) => {
      this.products = products.items;
    })
  }

}
