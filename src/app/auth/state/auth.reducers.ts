import { counterState, initialState } from "src/app/ngrx/state";
import { Action, createReducer } from "@ngrx/store";


const _authReducer=createReducer(initialState);
export function AuthReducer(state: counterState | undefined, action: Action){
    return _authReducer(state, action);
}