import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterButtonComponent } from '././counter/counter-button/counter-button.component'
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { AddpostsComponent } from './posts/addposts/addposts.component';
import { EditpostsComponent } from './posts/editposts/editposts.component';
const routes: Routes = [
  {
    path:'',component:HomeComponent,
  },
  {
    path:'counter',
    loadChildren:()=> import('../app/counter/counter.module').then((m)=>m.CounterModule)
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('../app/posts/posts.module').then((m) => m.PostsModule),
  
  },
 {
   path:'auth',
   loadChildren:()=>import('../app/auth/auth.module').then(m=>m.AuthModule)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
