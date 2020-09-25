import {Component} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
selector:'app-shoppinglist',
templateUrl:'./Shoppinglist.component.html',
styleUrls:['./Shoppinglist.component.css']
})

export class Shoppinglist{
    ingredients:Ingredient[]=[
        new Ingredient('Zira',10),
        new Ingredient('Tamarind',9)
    ]
}