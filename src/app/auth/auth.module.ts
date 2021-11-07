import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { Store, StoreModule } from "@ngrx/store";
import { LoginComponent } from './login/login.component';
import { AuthEffects } from "./state/auth.effects";
import { AuthReducer } from "./state/auth.reducers";
import { AUTH_STATE_NAME } from "./state/auth.selection";


const routes:Routes=[
    {
        path:'',children:[
            {path:'',redirectTo:'login'},
            {
                path:'login',component:LoginComponent
            }
        ]
    }
]




@NgModule({
    declarations:[
    LoginComponent
  ],
    imports:[CommonModule,
        StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer),
        EffectsModule.forFeature([AuthEffects]), ReactiveFormsModule,RouterModule.forChild(routes) ]
})
export class AuthModule{

}