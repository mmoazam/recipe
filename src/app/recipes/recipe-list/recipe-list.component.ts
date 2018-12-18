import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test recipe',
      'https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/06/chicken-wings-main.jpg'
    ),
    new Recipe(
      'Test Recipe',
      'This is a test recipe',
      'https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/06/chicken-wings-main.jpg'
    ),
    new Recipe(
      'Test Recipe',
      'This is a test recipe',
      'https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/06/chicken-wings-main.jpg'
    )
  ];

  // myrecipe = new Recipe('test recipe', 'banana pudding', 'https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/06/chicken-wings-main.jpg')

  constructor() { }

  ngOnInit() {
    console.log(this.recipes)
  }

}
