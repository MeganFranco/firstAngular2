/*grab the component decorator --> decorators are functions, and you will have to call them in your file*/
import { Component } from 'angular2/core'
//dependancy injection
import { CourseService } from './course.service'

/*add the comonent decorator*/
    @Component({
        /*add your attrubutes*/
        selector: 'courses',
        template: ` 
            <h2>Courses</h2>
            {{ title }}
            <ul>
                <li *ngFor="#course of courses"> 
                    {{ course }}
                </li>
            </ul>
            `, //the backtick allows for you to write the template in multiple lines
        providers: [CourseService]
        /*use the provider attribute for dependancy injection*/
    })
/*create the class
in typescript, each file is considered a 'module' and in each of these you often export one of more things 
(or expose?)
*/
export class CoursesComponent {
    /*components wrap the data and the logic behind the view, so you can add properties to your component and display them in a template*/
    //add the title propertiy
    title = "The title of the courses page";
    courses;

//note the naming conventions of the constuctors...
    constructor ( courseService: CourseService ) {
        //instead of instantiating a new object of the course service, the constructor is no longer tightly coupled with it, and therefore more dynamic
        this.courses = courseService.getCourses();
    }
}

/*
other notes: in the real world, we often get data from a service, so the courses array ln28 shouldn't really be here
there shouldn't be any logic here other than the view logic
all the logic not about a specific view should be in a seperate service class
*/