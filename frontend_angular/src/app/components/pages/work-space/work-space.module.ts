import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerBiComponent } from './power-bi/power-bi.component';
import { UnosofComponent } from './unosof/unosof.component';
import { FreshportalComponent } from './freshportal/freshportal.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'power-bi', component: PowerBiComponent },
  { path: 'unosof', component: UnosofComponent },
  { path: 'freshportal', component: FreshportalComponent }
];

@NgModule({
  declarations: [
    PowerBiComponent,
    UnosofComponent,
    FreshportalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WorkSpaceModule { }
