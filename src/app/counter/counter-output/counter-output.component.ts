import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { dataAdd } from '../../ngrx/actions';
import { getChannelName, getCounter, getEmail } from '../../ngrx/counters.selectors';
import { counterState } from '../../ngrx/state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
counter!:number;
name!:string;
email!:string;
counter$!:Observable<number>;
  constructor(private store: Store<{counter:counterState}>) { }

  ngOnInit(): void {
 this.counter$=this.store.select(getCounter);
    this.store.select(getCounter).subscribe(data=>
      this.counter=data),
      this.store.select(getChannelName).subscribe(data=>
        this.name=data),
        this.store.select(getEmail).subscribe(data=>
          this.email=data)
        
  }

}

