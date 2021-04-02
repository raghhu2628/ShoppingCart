import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Shoppinglist} from '../app/Shoppinglist/Shoppinglist.component'
import {RecipeDetailComponent} from '../app/recipe-detail/recipe-detail.component'
import { LoginComponent } from './login/login.component';
import { RegistarionComponent } from './registration/registration.component';
import { PathLocationStrategy } from '@angular/common';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path:'registration',
        component:RegistarionComponent
    },
    {
        path:'receipdetails',
        component:RecipeItemComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }