import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { StateModule } from '../state/state.module';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CoverpageComponent } from './coverpage/coverpage.component';

@NgModule({
  imports: [
    CoreModule,
    StateModule,
  ],
  declarations: [
    AboutComponent,
    HomeComponent,
    CoverpageComponent,
  ],
})
export class PagesModule { }
