import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './studen-add/add.component';
import { StudentComponent } from './student-list/student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  { path: '', component: AddComponent },
  { path: 'addStudent', component: AddComponent },
  { path: 'studentList', component: StudentComponent },
  { path: 'update/:id', component: UpdateStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
