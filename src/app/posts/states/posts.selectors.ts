import {PostsState} from './posts.state'
import { createFeatureSelector, createSelector } from '@ngrx/store'
export const POST_STATE_NAME='posts';
const getPostsState=createFeatureSelector<PostsState>('posts');
export const getPosts=createSelector(getPostsState, (state)=>
{
    return state.posts;
})
export const getPostById=createSelector(getPostsState, (state: { posts: any[]; },props: { id: string | number; } )=>{
 
    return state.posts.find((post: { id: string | number; })=>post.id===props.id);
})