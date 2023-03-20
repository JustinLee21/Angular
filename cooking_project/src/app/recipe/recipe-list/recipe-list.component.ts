import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipe: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', "https://1.bp.blogspot.com/-e-GOmN5ct00/X1a5uEU4HrI/AAAAAAAAYsA/mh_OPlhyyv0RUGcCXTr_hh0W_sAkvf1HwCLcBGAsYHQ/s2048/nadan%2Bprawns%2Bfry%2B1.JPG")
  ]; 

  constructor(){}

}
