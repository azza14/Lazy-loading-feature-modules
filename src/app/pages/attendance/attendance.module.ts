import { SharedModule } from './../../shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceComponent } from './attendance.component';

@NgModule({
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    SharedModule
  ],
  declarations: [AttendanceComponent]
})
export class AttendanceModule { }
