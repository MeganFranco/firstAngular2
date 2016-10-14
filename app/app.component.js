System.register(['angular2/core', './courses.component', './authors.component', './auto-grow.directive'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, authors_component_1, auto_grow_directive_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <input type=\"button\"\n\n<!--\n        <h1>Hello Angular</h1>\n        <input type=\"text\" [value]=\"title\" (input)=\"title = $event.target.value\" />\n        \n        <input type=\"button\" (click)=\"title = ''\" value=\"Clear\" />\n        Preview: {{ title }}\n        <courses></courses>\n        \n        <authors></authors> -->\n",
                        /*remember that we use directives to extend the DOM*/
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorComponent, auto_grow_directive_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
/*
<i class="glyphicon glyphicon-star" />
<i class="glyphicon glyphicon-star-empty" />

notes: here we use the courses component to make a new element.
every component is technically a directive, but the difference is that components have templates, whereas directives don't

in the directives array: be sure to specify any of the components/directives that are used in the template in this component file

the exported class --AppComponent-- on ln16 is the root of the app, it's the view component that takes control of the entire page

BINDINGS: --square for properties, parentheses for events --
interpolation works well for adding dynamic values... where you want to render text
but you need to know that it works one way... from the component to the DOM

you can do ternary operations:
<button class="btn btn-large btn-primary"
        [style.backgroundColor]="isActive ? 'blue' : 'grays' ">Submit</button>
        
property binding: we bind DOM properties to our component properties, so if the state of the component changes, the dom will ve yodated
we can use parentheses or prefexes

if you want to tie this to events:
  @Component({
    selector: 'my-app',
    template: `
        <button (click)="onClick($event)">Submit</button>`
 
    export class AppComponent {
        onClick($event) {
            console.log("Clicked");
        }
    }
 
 two way Data Binding -- use both the property () binding and the event [] binding
 type="text" [()]
 or you could also use "bindon-ngModel"... but why would you want to do that?
*/ 
//# sourceMappingURL=app.component.js.map