import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { updatePost } from '../states/posts.actions';
import { Post } from '../states/posts.model';
import { getPostById } from '../states/posts.selectors';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-editposts',
  templateUrl: './editposts.component.html',
  styleUrls: ['./editposts.component.css']
})
export class EditpostsComponent implements OnInit {
  route: any;
  post!: Post;
postForm!:FormGroup;
postSubscription:Subscription | undefined;
  constructor(private router:ActivatedRoute, private store:Store<AppState>) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params:any)=>{
     const id=params.get('id');
    this.postSubscription= this.store.select(getPostById, {id}).subscribe((data)=>{
       this.post=data;
      this.createForm();
     })
    })
  }
createForm(){
  this.postForm=new FormGroup({
    title:new FormControl(this.post?.title,[
      Validators.required,
      Validators.minLength(6)
    ]),
    description:new FormControl(this.post?.description,[
      Validators.required,
      Validators.minLength(10)
    ])
  });

}
ngOnDestroy(){
  if(this.postSubscription){
this.postSubscription.unsubscribe();
  }}
  onSubmit(){
    if(!this.postForm.valid){
      return;
    }
    const title=this.postForm.value.title;
    const description=this.postForm.value.description;
    const post:Post={
      id:this.post?.id,
      title,description,


    }
    this.store.dispatch(updatePost({post}));
    this.route.navigate(['posts']);
  }
}
