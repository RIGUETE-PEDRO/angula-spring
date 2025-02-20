import { Router } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';
import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Observable,of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { relative } from 'path';

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'] // Certifique-se de que o caminho está correto
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category','actions'];
  isLoading = true; // Inicialize como true
course: any;

  constructor(
    private coursesService: CoursesService,
    public dialog:MatDialog,
    private readonly router: Router
  ) {
    this.courses$ = this.coursesService.list().pipe(
      catchError(error =>{
        this.onErro('erro ao carregar cursos.')
        console.log(error)
        return of ([])
      } )
    );
  }
  onErro( errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }
    onAdd(){
      this.router.navigate(['new'], { relativeTo: this.router.routerState.root }); // Navegue para a rota 'new'
    }

}
