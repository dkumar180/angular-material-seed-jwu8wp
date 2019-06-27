import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { StateModule } from '../state/state.module';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SubjectMatrixComponent } from './subject-matrix/subject-matrix.component';

import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    CoreModule,
    StateModule,
    AgGridModule.withComponents(null)
  ],
  declarations: [
    AboutComponent,
    HomeComponent,
    SubjectMatrixComponent
  ],
})
export class PagesModule { }
