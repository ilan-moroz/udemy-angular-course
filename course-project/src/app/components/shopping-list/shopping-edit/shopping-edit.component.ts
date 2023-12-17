import { Component, OnDestroy, OnInit } from '@angular/core';
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
  sub: Subscription;
  editMode = false;
  editIndex: number;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.addIngredient(newIngredient);
  }

  ngOnInit(): void {
    this.sub = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editIndex = index;
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
