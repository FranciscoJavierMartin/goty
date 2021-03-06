import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';

import { HomeComponent } from './pages/home/home.component';
import { GotyComponent } from './pages/goty/goty.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, GotyComponent],
  imports: [BrowserModule, AppRoutingModule, ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
