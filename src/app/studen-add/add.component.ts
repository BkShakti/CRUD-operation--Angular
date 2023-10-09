import { Component,OnInit } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
constructor(private student:StudentserviceService){}
  addStudent: any ={
    fname:'',
    lname:'',
    rollno:'',
    address:'',
    phoneno:'',
  }
  isSuccessShowing:Boolean=false;
  ngOnInit(): void {
  }
  saveData(){
    this.student.saveStudentData(this.addStudent).subscribe((res)=>{
      this.isSuccessShowing = true
    });
    this.addStudent= {
      fname:'',
      lname:'',
      rollno:'',
      address:'',
      phoneno:'',
    }
  }
  removedMsg(){
    this.isSuccessShowing = false;
    console.log("clicked");
  }
} 
