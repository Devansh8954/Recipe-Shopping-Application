// import { HttpClient, HttpParams } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { RecipeService } from "../recipes/recipe.service";
// import { Recipe } from "../recipes/recipe.model";
// import { exhaustMap, map, pipe, take, tap } from "rxjs";
// // import { AuthService } from "../auth/auth.service";
// import { Store } from "@ngrx/store";
// import * as fromApp from '../store/app-reducer';
// import * as RecipesActions from '../recipes/store/recipe.actions';

// @Injectable({providedIn: 'root'})
// export class DataStorageService {
//     constructor(private http: HttpClient, private RecipeService: RecipeService, 
//         public store: Store<fromApp.AppState>
//         // private authService: AuthService
//         ){}

//     storeRecipe(){
//         const recipes = this.RecipeService.getRecipes();
//         this.http.put('https://ng-course-recipe-book-21365-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json',recipes).
//         subscribe(response => {
//             console.log (response);
//         });
//     }

//     fetchRecipe(){
//             return this.http.get<Recipe[]>('https://ng-course-recipe-book-21365-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json')
//             .pipe(
//                 map(recipes => {
//                     return recipes.map(recipe => {
//                         return {...recipe, ingredients: recipe.ingredients ? recipe .ingredients : []};
//                     });
//                 }),
//                 tap(recipes => {
//                     // this.RecipeService.setRecipes(recipes);
//                     this.store.dispatch(new RecipesActions.SetRecipes(recipes));
//                 })
//             );
       
//     }
// }

