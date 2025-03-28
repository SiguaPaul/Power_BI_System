import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    NavComponent,
    SidenavComponent
  ]
})
export class LayoutsModule { }
