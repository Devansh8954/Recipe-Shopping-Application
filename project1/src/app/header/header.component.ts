import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
// import { DataStorageService } from "../shared/data-storage.service";
// import { AuthService } from "../auth/auth.service";
import { Subscription, map } from "rxjs";
import { Store } from "@ngrx/store";
import * as fromApp from '../store/app-reducer'; 
import * as AuthActions from '../auth/store/auth.actions'; 
import * as RecipeActions from '../recipes/store/recipe.actions';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    
})
export class HeaderComponent implements OnInit, OnDestroy{
    isAuthenticated = false;
    private userSub: Subscription;
    // @Output() featureSelected = new EventEmitter<string>();

    // collapsed = true; 
    // onSelect(feature: string){
    //     this.featureSelected.emit(feature);
    // }

    constructor(
        // private dataStorageService: DataStorageService, 
        // private authService: AuthService,
        private store: Store<fromApp.AppState>){}

    ngOnInit() {
        this.userSub = this.store.select('auth').pipe(map(authState => authState.user)).subscribe(user => {
            this.isAuthenticated = !!user;
            console.log(!user);
            console.log(!!user);
        });
    }

    onSaveData(){
        // this.dataStorageService.storeRecipe();
        this.store.dispatch(new RecipeActions.StoreRecipes());
    }

    onFetchData(){
        // this.dataStorageService.fetchRecipe().subscribe();
        this.store.dispatch(new RecipeActions.FetchRecipes());
    }

    onLogout(){
        // this.authService.logout();
        this.store.dispatch(new AuthActions.Logout());
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
}