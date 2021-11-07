
import { Action, createAction, createReducer } from "@ngrx/store";
import { customAdd, dataAdd, increment } from "./actions";
import {on} from '@ngrx/store'
import { decrement,reset } from "./actions";
import {initialState} from './state'
const _counterReducer=createReducer(initialState, 
    on(increment, (state:any)=>{
        return {
            ...state,
            counter: state.counter+1

        }
    }),
    on(decrement, (state:any)=>{
        return {
            ...state,
            counter:state.counter-1
        }
    }),
    on(reset, (state)=>{
        return {
            ...state,
counter:0
        }
    }),
    on(customAdd,(state: any, action: { value: any })=>{
        return{
            ...state,
            counter:state.counter+action.value
        }
    }),
    on(dataAdd,(state,action)=>{
        return {
            ...state,
            counter:0,
            name:state.name+"   "+action.name,
            email:state.email+"   "+action.email
        }
    })
    )

export function counterReducer(state:any, action:any){
    return _counterReducer(state, action);
}