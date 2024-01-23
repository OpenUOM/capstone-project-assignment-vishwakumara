import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewTeacherComponent } from './components/add-new-teacher/add-new-teacher.component';
import { EditTeacherComponent } from './components/edit-teacher/edit-teacher.component';
import { AddNewStudentComponent } from './components/add-new-student/add-new-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { TeacherTableComponent } from './components/teacher-table/teacher-table.component';
import { StudentTableComponent } from './components/student-table/student-table.component';

const routes: Routes = [
  { path: '', component: TeacherTableComponent },
  { path: 'student', component: StudentTableComponent },
  { path: 'addTeacher', component: AddNewTeacherComponent },
  { path: 'editTeacher', component: EditTeacherComponent },
  { path: 'addStudent', component: AddNewStudentComponent },
  { path: 'editStudent', component: EditStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
