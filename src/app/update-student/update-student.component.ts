import { Component } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
})
export class UpdateStudentComponent {
  constructor(
    private student: StudentserviceService,
    private router: ActivatedRoute
  ) {}
  addStudent: any = {
    fname: '',
    lname: '',
    rollno: '',
    address: '',
    phoneno: '',
  };
  isSuccessShowing: Boolean = false;
  ngOnInit(): void {
    this.student
      .getStudentById(this.router.snapshot.params['id'])
      .subscribe((res: any) => {
        this.addStudent = {
          fname: `${res.fname}`,
          lname: `${res.lname}`,
          rollno: `${res.rollno}`,
          address: `${res.address}`,
          phoneno: `${res.phoneno}`,
        };
      });
  }
  updateData() {
    this.student
      .updateStudtenData(this.router.snapshot.params['id'], this.addStudent)
      .subscribe((res: any) => {
        this.isSuccessShowing = true;
      });
    this.addStudent = {
      fname: '',
      lname: '',
      rollno: '',
      address: '',
      phoneno: '',
    };
  }
  removedMsg() {
    this.isSuccessShowing = false;
    console.log('clicked');
  }
}
