import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RecipeStartComponent } from './components/recipe/recipe-start/recipe-start.component';
import { RecipeCreateComponent } from './components/recipe/recipe-create/recipe-create.component';
import { RecipeDetailsComponent } from './components/recipe/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './components/recipe/recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './components/recipe/recipe-list/recipe-list.component';

const routes: Route[] = [
  { path: 'auth', children:[
    {path: 'signin', component: SigninComponent},
    {path: 'signup', component: SignupComponent},
  ]},
  { path: 'recipies', children: [
    { path: '', pathMatch: 'full', component: RecipeStartComponent},
    { path: 'create', component: RecipeCreateComponent},
    { path: 'details/:id', component: RecipeDetailsComponent},
    { path: 'edit/:id', component: RecipeEditComponent},
    { path: 'list', component: RecipeListComponent},

  ]}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
