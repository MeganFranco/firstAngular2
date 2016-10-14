System.register(['angular2/core', './course.service', './auto-grow.directive'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, course_service_1, auto_grow_directive_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }],
        execute: function() {
            /*add the comonent decorator*/
            CoursesComponent = (function () {
                //note the naming conventions of the constuctors...
                function CoursesComponent(courseService) {
                    //instead of instantiating a new object of the course service, the constructor is no longer tightly coupled with it, and therefore more dynamic
                    this.courses = courseService.getCourses();
                }
                CoursesComponent = __decorate([
                    core_1.Component({
                        /*add your attrubutes*/
                        selector: 'courses',
                        template: " \n            <h2>Courses</h2>\n            {{ title }}\n            <input type=\"text\" [(ngModel)]=\"newInput\" autoGrow>\n            <p> {{ newInput }} </p>\n            <ul>\n                <li *ngFor=\"#course of courses\"> \n                    {{ course }}\n                </li>\n            </ul>\n            ",
                        providers: [course_service_1.CourseService],
                        /*use the provider attribute for dependancy injection*/
                        directives: [auto_grow_directive_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [course_service_1.CourseService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
/*
other notes: in the real world, we often get data from a service, so the courses array ln28 shouldn't really be here
there shouldn't be any logic here other than the view logic
all the logic not about a specific view should be in a seperate service class
the provider on ln19 is important!! it's where we inject the dependancy in order to finish the component and export it
*/ 
//# sourceMappingURL=courses.component.js.map