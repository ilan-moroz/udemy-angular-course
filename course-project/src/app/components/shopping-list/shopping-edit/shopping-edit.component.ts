import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from '../../../services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../../shared/ingredient.modal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') slForm: NgForm;
  sub: Subscription;
  editMode = false;
  editIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    form.reset();
    this.editMode = false;
  }

  ngOnInit(): void {
    this.sub = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editIndex);
    this.slForm.reset();
    this.editMode = false;
  }
}
