import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { StateModule } from '../state/state.module';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CoreModule,
    StateModule,
  ],
  declarations: [
    AboutComponent,
    HomeComponent,
  ],
})
export class PagesModule { }
