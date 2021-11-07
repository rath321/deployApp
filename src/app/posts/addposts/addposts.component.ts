import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../states/posts.actions';
import { Post } from '../states/posts.model';

@Component({
  selector: 'app-addposts',
  templateUrl: './addposts.component.html',
  styleUrls: ['./addposts.component.css']
})
export class AddpostsComponent implements OnInit {

 
  postForm!:FormGroup
  constructor(private store:Store<AppState>){}
  ngOnInit():void{
    this.postForm=new FormGroup({
      title:new FormControl(null,[
        Validators.required,
        Validators.minLength(6),
      ]),
      description:new FormControl(
        null, [Validators.required, Validators.minLength(10)]
      )
    })

    
  }
  onAddPost(){
if(!this.postForm.valid)
return;
 const post:Post={
title:this.postForm.value.title,
description:this.postForm.value.description,
}
this.store.dispatch(addPost({post}))
  }
}
