import { Component,  OnDestroy,  OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
// import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, map, pipe } from 'rxjs';
import * as fromApp from '../../store/app-reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy{
  recipes: Recipe[];
  subcription: Subscription;

  constructor(
    public store: Store<fromApp.AppState>,
    // private recipeService: RecipeService,
     private router: Router,
      private route: ActivatedRoute) {
  }
  ngOnInit() {
    // this.subcription = this.recipeService.recipesChanged.subscribe(
      this.subcription = this.store
      .select('recipes')
      .pipe(map(recipesState => recipesState.recipes))
      .subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    // this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
      this.subcription.unsubscribe();
  }

}
