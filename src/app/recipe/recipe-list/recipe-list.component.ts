import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe('Strogonoff', 'Delicious Meat Strogonoff','http://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/1/30/0/VF0508_Beef-Stroganoff_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382375830154.jpeg'),
      new Recipe('Strogonoff', 'Delicious Meat Strogonoff','http://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/1/30/0/VF0508_Beef-Stroganoff_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382375830154.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
