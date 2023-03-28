import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>(); 

  recipe: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', "https://1.bp.blogspot.com/-e-GOmN5ct00/X1a5uEU4HrI/AAAAAAAAYsA/mh_OPlhyyv0RUGcCXTr_hh0W_sAkvf1HwCLcBGAsYHQ/s2048/nadan%2Bprawns%2Bfry%2B1.JPG"),
    new Recipe('A Second Test Recipe', 'This is the second test', "https://1.bp.blogspot.com/-e-GOmN5ct00/X1a5uEU4HrI/AAAAAAAAYsA/mh_OPlhyyv0RUGcCXTr_hh0W_sAkvf1HwCLcBGAsYHQ/s2048/nadan%2Bprawns%2Bfry%2B1.JPG")
  ]; 

  constructor(){}

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe); 
  }

}
