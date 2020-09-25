import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipelist/recipe-model';
@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
 receipeModel:Recipe[]=[
   new Recipe('Raghu','Testing',
   'https://pvtistes.net/wp-content/uploads/2013/09/Las_Vegas_Bryce_Canyon_Lake_Powell_20.jpg'),
   new Recipe('Test','Testing receip',
   'https://pvtistes.net/wp-content/uploads/2013/09/Las_Vegas_Bryce_Canyon_Lake_Powell_20.jpg'),
   new Recipe('Another Test','Testing',
   'https://pvtistes.net/wp-content/uploads/2013/09/Las_Vegas_Bryce_Canyon_Lake_Powell_20.jpg'),
   new Recipe('One more Test','Testing',
   'https://pvtistes.net/wp-content/uploads/2013/09/Las_Vegas_Bryce_Canyon_Lake_Powell_20.jpg'),
 ]
  constructor() { }

  ngOnInit() {
  }

}
