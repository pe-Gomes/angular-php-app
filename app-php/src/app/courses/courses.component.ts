import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  course: Course = new Course();

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.coursesService
      .fetchAll()
      .subscribe((res: Course[]) => (this.courses = res));
    console.log(this.courses);
  }

  create() {
    this.coursesService.createCourse(this.course).subscribe((res: Course[]) => {
      this.courses = res;
      this.course.nameCourse = null;
      this.course.priceCourse = null;

      this.getAll();
    });
  }

  update() {
    this.coursesService.updateCourse(this.course).subscribe((res: Course[]) => {
      this.courses = res;
      this.course.nameCourse = null;
      this.course.priceCourse = null;

      this.getAll();
    });
  }

  delete() {
    this.coursesService.removeCourse(this.course).subscribe((res: Course[]) => {
      this.courses = res;
      this.course.nameCourse = null;
      this.course.priceCourse = null;
    });
  }

  select(course: Course) {
    this.course.idCourse = course.idCourse;
    this.course.nameCourse = course.nameCourse;
    this.course.priceCourse = course.priceCourse;
    console.log(this.course);
  }
}
