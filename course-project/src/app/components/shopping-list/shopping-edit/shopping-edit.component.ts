import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.modal';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  @Output() addIngredients = new EventEmitter<Ingredient>();

  addIngredient() {
    this.addIngredients.emit({
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value,
    });
  }
}
