import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterReducer } from './ngrx/reducers';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http'
import { HeaderComponent } from './header/header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { postsReducer } from './posts/states/posts.reducers';
import { appReducer } from './store/app.state';
import { EffectsModule } from '@ngrx/effects';
@NgModule({
  declarations: [
    AppComponent,
   HomeComponent,
    HeaderComponent,
  
  ],
  imports: [
    BrowserModule,
 AppRoutingModule,
    StoreModule.forRoot({}),
    FormsModule,EffectsModule.forRoot([])
    ,HttpClientModule,
    EffectsModule.forRoot([]),
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({
      maxAge:25,
      logOnly:environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
