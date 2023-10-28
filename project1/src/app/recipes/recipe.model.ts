import { Ingredients } from "../shared/ingredient.model";

export class Recipe {
    public name: string;
    public desciption: string;
    public imagePath: string;
    public ingredients: Ingredients[];

    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredients[]){
        this.name = name;
        this.desciption= desc;
        this.imagePath  = imagePath ;
        this.ingredients = ingredients;
    }
}