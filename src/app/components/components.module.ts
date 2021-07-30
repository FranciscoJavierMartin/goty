import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NavbarComponent } from './navbar/navbar.component';
import { HorizontalBarGraphicsComponent } from './horizontal-bar-graphics/horizontal-bar-graphics.component';

@NgModule({
  declarations: [NavbarComponent, HorizontalBarGraphicsComponent],
  exports: [NavbarComponent, HorizontalBarGraphicsComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxChartsModule,
  ],
})
export class ComponentsModule {}
