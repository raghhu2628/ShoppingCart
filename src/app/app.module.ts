import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import{HeaderComponent} from './header/header.component';
import{ShoppinglisteditComponent} from './Shoppinglist/ShoppinglistEdit/Shoppinglistedit.component'
import{Shoppinglist} from './Shoppinglist/Shoppinglist.component';
import {AppRoutingModule} from './app.route.module';
import {LoginComponent}from './login/login.component'
@NgModule({
  declarations: [
    AppComponent,
    
    IngredientComponent,
    RecipelistComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    HeaderComponent,
    ShoppinglisteditComponent,
    Shoppinglist,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
