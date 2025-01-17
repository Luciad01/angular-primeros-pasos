import { NgModule } from '@angular/core';
//  Modules
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { WinxModule } from './winx/winx.module';
//  Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    WinxModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
