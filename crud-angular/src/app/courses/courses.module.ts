import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../shared/shared.module';
import { CourseFormComponent } from './course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CoursesComponent, CourseFormComponent],  // Adicionar CourseFormComponent aqui // nao mecher
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    MatProgressSpinnerModule,
    SharedModule,
    ReactiveFormsModule
  ],
})
export class CoursesModule {}
