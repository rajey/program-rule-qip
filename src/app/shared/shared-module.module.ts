import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dhis2MenuComponent } from './components/dhis2-menu/dhis2-menu.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    Dhis2MenuComponent,
    FilterPipe,
    ProgressBarComponent
  ],
  exports: [
    Dhis2MenuComponent,
    FilterPipe,
    ProgressBarComponent
  ],
  providers: []
})

export class SharedModule {}
