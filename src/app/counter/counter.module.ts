import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "../ngrx/reducers";
import { CounterButtonComponent } from "./counter-button/counter-button.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterComponent } from "./counter.component";



const routes:Routes=[{
    
        path:'',component:CounterComponent
      
}]

@NgModule({
    declarations:[
        CounterButtonComponent,
        CounterOutputComponent,
       
        CounterComponent,
    ],
    imports:[CommonModule,FormsModule,RouterModule.forChild(routes),
    StoreModule.forFeature('counter',counterReducer)],
})
export class CounterModule{}