import { counterReducer } from "../ngrx/reducers";
import { counterState } from "../ngrx/state";
import { postsReducer } from "../posts/states/posts.reducers";
import { PostsState } from "../posts/states/posts.state";


export interface AppState{
    counter:counterState;
    posts:PostsState;
}
export const appReducer={
    counter:counterReducer,
    posts:postsReducer,
}