import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = environment.production ? '/api' : 'test';
  }

  initializeDB(){
    return this.http.get(`${this.ROOT_URL}/dbinitialize`);
  }

  getTeacherData(){
    return this.http.get(`${this.ROOT_URL}/listTeachers`);
  }

  getStudentData(){
    return this.http.get(`${this.ROOT_URL}/listStudents`);
  }

  getOneStudentData(payload: Object){
    return this.http.post(`${this.ROOT_URL}/getStudentInfo`, payload);
  }

  getOneTeacherData(payload: Object){
    return this.http.post(`${this.ROOT_URL}/getTeacherInfo`, payload);
  }

  addTeacher(payload: Object){
    return this.http.post(`${this.ROOT_URL}/addTeacher`, payload);
  }

  deleteTeacher(payload: Object){
    return this.http.post(`${this.ROOT_URL}/deleteTeacher`, payload);
  }

  editTeacher(payload: Object){
    return this.http.post(`${this.ROOT_URL}/editTeacher`, payload);
  }

  editStudent(payload: Object){
    return this.http.post(`${this.ROOT_URL}/editStudent`, payload);
  }

  addStudent(payload: Object){
    return this.http.post(`${this.ROOT_URL}/addStudent`, payload);
  }

  deleteStudent(payload: Object){
    return this.http.post(`${this.ROOT_URL}/deleteStudent`, payload);
  }
}
