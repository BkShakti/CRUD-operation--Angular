import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentserviceService {
  url = 'http://localhost:3000/student';
  constructor(private http: HttpClient) {}

  getAllStudent() {
    return this.http.get(this.url);
  }

  saveStudentData(data: any) {
    // console.log(data);
    return this.http.post(this.url, data);
  }

  deletStudent(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }

  getStudentById(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }

  updateStudtenData(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }
}
