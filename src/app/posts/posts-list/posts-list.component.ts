import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import {Post} from '../states/posts.model'
import { Observable } from 'rxjs';
import { getPosts } from '../states/posts.selectors';
import { deletePost } from '../states/posts.actions';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
posts!:Observable<Post[]>;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.posts=this.store.select(getPosts)
    console.log(this.posts);
  }
  onDeletePost(id:string){
   
    if(confirm("Are sure u want to delete?"))
   {this.store.dispatch(deletePost({id}));
    
  }
  }
  

}
