import { Product } from '../../../types';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RatingModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() productOutput: EventEmitter<Product> = new EventEmitter<Product>();

  ngOnInit() {
    this.productOutput.emit(this.product)
  }
}
