import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is just a test', 'https://cdn.tasteatlas.com/images/dishes/d15d1c9354374b6b9e393fb384cf72a6.jpg?w=375&h=280')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
