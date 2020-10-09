import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Shoppinglist} from '../app/Shoppinglist/Shoppinglist.component'
import {RecipeDetailComponent} from '../app/recipe-detail/recipe-detail.component'
import { LoginComponent } from './login/login.component';
const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
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