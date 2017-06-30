import { Component } from "@angular/core";
import { student } from "./model/student";
@Component(
    {
        selector: 'my-app',
        templateUrl: './app.component.html',
        styleUrls:['./app.component.css']
    }
)
export class AppComponent {
    filter:string = 'ti';
    title: string = "Students Managment"

    selectedStudent: student;

    studentList:student[] = [
        new student(1,'Tracey Jamar',21,'male'),
        new student(2,'Melonie Guarino',22,'female'),
        new student(1,'Wilbert Lancon',18,'male'),
        new student(1,'Emelia Crump',17,'female'),
        new student(1,'Charles Dees',15,'male'),
        new student(1,'Romeo Shoultz',20,'male'),
        new student(1,'Marc Schachter',20,'male'),
        new student(1,'Moshe Lavallee',21,'male'),
        new student(1,'Emelia Crump',26,'female'),
        new student(1,'Robert Adrian',23,'male'),
        new student(1,'Lilla Adger',19,'female'),
    ]

    selectStudent(student) {
        this.selectedStudent = student;
    }
}