import {Actions, createEffect, ofType} from '@ngrx/effects'
import { Inject, Injectable } from '@angular/core'
import { loginStart, loginSuccess } from './auth.actions'
import { AuthService } from 'src/app/services/auth.services'

import { Post } from 'src/app/posts/states/posts.model'
import { map} from 'rxjs/operators';
@Injectable()
export class AuthEffects{
    constructor(private actions$:Actions, private authService:AuthService){}
    login$ = createEffect(():any=>{
        return this.actions$.pipe(
          ofType(loginStart),
          exhaustMap((action) => {
            return this.authService.login(action.email, action.password).pipe(
              map((data: any) => {
               return loginSuccess;
              })
            );
          })
        );
      });
}

function exhaustMap(arg0: (action: any) => void): import("rxjs").OperatorFunction<{ email: any; password: any } & import("@ngrx/store/src/models").TypedAction<"[auth page] login start">, unknown> {
    throw new Error('Function not implemented.')
}
