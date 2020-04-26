import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosComponent } from './todos/todos.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { AboutProjectComponent } from './pages/about/about-project/about-project.component';
import { AboutUsComponent } from './pages/about/about-us/about-us.component';
import { UserComponent } from './pages/about/user/user.component';


const routes: Routes = [
    { path: '', redirectTo: 'todos', pathMatch: 'full'},
    { path: 'todos', component: TodosComponent },
    { 
    path: 'about', component: AboutComponent,
    children: [
        { path: '', redirectTo: 'about-project', pathMatch: 'full', },
        { path: 'about-project', component: AboutProjectComponent },
        { path: 'about-us', component: AboutUsComponent },
        { path: 'about-us/:userId', component: UserComponent }
    ]},
    { path: '**', component: PageNotFoundComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }