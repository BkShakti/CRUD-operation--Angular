import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  studentList: any = [];

  constructor(private student: StudentserviceService) {}

  ngOnInit(): void {
    this.student.getAllStudent().subscribe((result: any) => {
      this.studentList = result;
      console.log(this.studentList);
    });
  }
  delStudent(id: any) {
    this.student.deletStudent(id).subscribe((res: any) => {
      this.ngOnInit();
    });
  }

  updateStudent() {}
}
