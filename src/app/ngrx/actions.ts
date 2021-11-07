import { createAction, props } from "@ngrx/store";
export const increment=createAction('increment');
export const decrement=createAction('decrement');
export const reset=createAction('reset');
export const customAdd=createAction('customAdd',props<{value:number}>());
export const dataAdd=createAction('dataAdd',props<{name:string, email:string}>())