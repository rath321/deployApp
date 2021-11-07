import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl,FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset, customAdd, dataAdd } from './../../ngrx/actions';
import { getChannelName} from './../../ngrx/counters.selectors'
import { NgModel } from '@angular/forms';
import { counterState } from './../../ngrx/state';
@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {
  value!: number;
  name!:string;
  email!:string;

  constructor(private store:Store<{counter:counterState}>) { }
num:number[]=[3,4,5,6,6,7,4,3,24,4];

  
 ngOnInit(){

 }
 isOdd(num:number):any{

  if(num%2===1)
  return true;
  else 
  return false;



 }
isPrime(num:number):any{
   let i=1;
   while(num!=0)
   {
     if(num%i==0 && (i!==1 || i!==num) )
     return true;
     else 
     i++;
   }
if(i==num)
return false;
 }
increment(){
  this.store.dispatch(increment());
}
decrement(){
this.store.dispatch(decrement());
}
reset(){
this.store.dispatch(reset());
}
customAdd(){
this.store.dispatch(customAdd({value:this.value}))
}
dataAdd(){
 
  this.store.dispatch(dataAdd({name:this.name,email:this.email}))
}
}
function isPrime(num: number) {
  throw new Error('Function not implemented.');
}

