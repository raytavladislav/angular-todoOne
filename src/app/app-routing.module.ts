import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosComponent } from './todos/todos.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';



const routes: Routes = [
    { path: '', redirectTo: 'todos', pathMatch: 'full'},
    { path: 'todos', component: TodosComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: PageNotFoundComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }