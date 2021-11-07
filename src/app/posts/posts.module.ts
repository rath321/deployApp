import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import {Routes,RouterModule } from "@angular/router";
import { Store, StoreModule } from "@ngrx/store";
import { AddpostsComponent } from "./addposts/addposts.component";
import { EditpostsComponent } from "./editposts/editposts.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { postsReducer } from "./states/posts.reducers";
import { POST_STATE_NAME } from "./states/posts.selectors";

const routes:Routes=[
    {
        path: '',
        component: PostsListComponent,
        children: [
          { path: 'add', component: AddpostsComponent },
          {
            path: 'edit/:id',
            component: EditpostsComponent,
          },
        ],
      },
];



@NgModule({
    declarations:[
       AddpostsComponent,
       EditpostsComponent,
       PostsListComponent
    ],
    imports:[CommonModule, ReactiveFormsModule, RouterModule.forChild(routes),
    StoreModule.forFeature(POST_STATE_NAME,postsReducer)]
})

export class PostsModule{}
