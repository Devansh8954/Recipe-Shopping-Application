import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Observable, Subscription } from 'rxjs';
import { LoggingService } from '../loading.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app-reducer';
import * as ShoppingListActions from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients: Observable<{ingredients: Ingredients[]}>;
  private igChangeSub: Subscription;

  constructor(private slService: ShoppingListService,
     private loggingService: LoggingService,
     private store: Store<fromApp.AppState>){
      // {shoppingList: {ingredients: Ingredients[]} }
  }
  ngOnInit(){
    this.ingredients = this.store.select('shoppingList');
    // this.store.select('shoppingList').subscribe();
    // this.ingredients = this.slService.getIngredients();
    // this.igChangeSub = this.slService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredients []) => {
    //     this.ingredients = ingredients;
    //   }
    // );
    this.loggingService.printLog('Hello from ShoppingList ngOnInit');
  }

  onEditItem(index: number){
    // this.slService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

  ngOnDestroy() {
      // this.igChangeSub.unsubscribe();
  }

}
