System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CourseService;
    return {
        setters:[],
        execute: function() {
            CourseService = (function () {
                function CourseService() {
                }
                //define a method and set return type
                CourseService.prototype.getCourses = function () {
                    return ["Course1", "Course2", "Course2"];
                };
                return CourseService;
            }());
            exports_1("CourseService", CourseService);
        }
    }
});
/*
notes: "a service is just a plain class -- nothing more"
*/ 
//# sourceMappingURL=course.service.js.map