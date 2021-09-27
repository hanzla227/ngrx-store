import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {dataEffects} from './store/effects/data.effects'
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import {reducers} from './store/app.state'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers.dataTemplate,{
      runtimeChecks: {
          strictStateImmutability: false,
          strictActionImmutability: false,
      },
  }),
    EffectsModule.forRoot([dataEffects]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
