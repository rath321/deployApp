import { Post } from "./posts.model";

export interface PostsState{
   posts:Post[];
}
export const initialState: PostsState={
    posts:[
        {id:'1',title:'Sample Title 1', description:'Sample description 1'},
        {
            id:'2', title:'Sample title 1', description:'Sample 2'
        }
    ]
}