import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { C1Component } from './c1.component';
import { C2Component } from './c2.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
       { 
        path: 'heroes', 
        component: C1Component,
      }, 
      { 
        path: 'heroes', 
        component: C2Component,
        outlet: 'header1'   
      }
    ])
  ],
  exports : [
    RouterModule
  ]
})
export class AppRouting {

}