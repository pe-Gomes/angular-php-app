import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from './course';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  url: string = 'http://localhost/api/php/';
  courses!: Course[];

  constructor(private http: HttpClient) {}

  fetchAll(): Observable<Course[]> {
    return this.http.get(this.url + 'list').pipe(
      map((res: any) => {
        this.courses = res['courses'];
        return this.courses;
      })
    );
  }

  createCourse(course: Course): Observable<Course[]> {
    return this.http.post(this.url + 'create', { courses: course }).pipe(
      map((res: any) => {
        this.courses.push(res['courses']);
        return this.courses;
      })
    );
  }

  removeCourse(course: Course) {
    const params = new HttpParams().set(
      'idCourse',
      course.idCourse!.toString()
    );

    return this.http.delete(this.url + 'delete', { params: params }).pipe(
      map((res: any) => {
        const filtered = this.courses.filter((c) => {
          return +c['idCourse']! !== +course.idCourse!;
        });
        return (this.courses = filtered);
      })
    );
  }

  updateCourse(course: Course): Observable<Course[]> {
    return this.http.put(this.url + 'update', { courses: course }).pipe(
      map((res: any) => {
        const editedCourse = this.courses.find((c) => {
          return +c['idCourse']! === +['idCourse'];
        });

        if (editedCourse) {
          editedCourse['nameCourse'] = course['nameCourse'];
          editedCourse['priceCourse'] = course['priceCourse'];
        }
        return this.courses;
      })
    );
  }
}
