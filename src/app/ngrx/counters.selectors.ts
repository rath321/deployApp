import { counterState } from "./state";
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getCounterState= createFeatureSelector<counterState>('counter');
export const getCounter=createSelector(getCounterState, (state)=>{
    return state.counter;
})
export const getChannelName=createSelector(getCounterState, (state)=>{
    return state.name;
})
export const getEmail=createSelector(getCounterState,(state)=>{
    return state.email;
})