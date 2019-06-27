import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module'

import { MaterialModule } from '@angular/material';


import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'
import { LayoutComponent } from './components/layout/layout.component'

const components = [
  FooterComponent,
  HeaderComponent,
  LayoutComponent,
]

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
    MaterialModule,
  ],
})
export class UiModule { }
