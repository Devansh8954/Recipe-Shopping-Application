import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredients } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";
import { Store } from "@ngrx/store";
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromApp from '../store/app-reducer';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  // recipeSelected = new EventEmitter<Recipe>();
  // recipeSelected = new Subject<Recipe>();
  // private recipes: Recipe[] = [
  //   new Recipe('Tasty Schnitzel', 'A super-tasty Schnitzel - just awesome!',
  //   'https://www.safefood.net/getmedia/94101697-3c3f-4fe1-8ae8-5b595d3814ba/medium-rare-steak.jpg?w=2000&h=1333&ext=.jpg&width=1360&resizemode=force',[
  //     new Ingredients('Meat',1),
  //     new Ingredients('French Fries',20),
  //   ]),
  //   new Recipe('Big Fat Burger',
  //    'What else you need to say?',
  //     'https://static.toiimg.com/thumb/75675148.cms?width=573&height=430',[
  //     new Ingredients('Buns',2),
  //     new Ingredients('Meat',1),
  //     ])
  // ];

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService, private store: Store<fromApp.AppState>){ }
  // {shoppingList: {ingredients: Ingredients[]} }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return 	this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredients[]){
    // this.slService.addIngredient(ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}