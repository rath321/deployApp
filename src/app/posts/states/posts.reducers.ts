import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";

import { addPost, deletePost, updatePost } from "./posts.actions";
import { initialState } from "\./posts.state";


const _postsReducer=createReducer(initialState,on(addPost,(state,action)=>{
    let post={...action.post};
 post.id=(state.posts.length+1).toString();
    return {
        ...state,
        posts:[...state.posts,post]
    }
}),
on(updatePost, (state, action)=>{
    const updatedPosts=state.posts.map(post=>
    {
        return action.post.id===post.id?action.post:post;
    })
    return{
        ...state,
        posts:updatedPosts,

}
}),
on(deletePost, (state, {id})=>{
    const updatedPosts=state.posts.filter((post)=>{
       
        if(post.id==id)
        {
            return false;
        }
        return true;
      
        //return append(slice[:s], slice[s+1:]...)
    })
    console.log(updatedPosts);
    return{
        ...state,
        posts:updatedPosts
    }
})
)

export function postsReducer(state: any,action: any):any{

        return _postsReducer(state, action);
    }
