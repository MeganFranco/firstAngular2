import {Component} from 'angular2/core';
/*your "root component" is nothing but a plain typescript class...
it's just decorated with the componend decorator
also, think of this component as your root view*/
import { CoursesComponent } from './courses.component';
import { FavoriteComponent } from './favorite.component';

@Component({
    selector: 'my-app',
    template: `<courses></courses><favorite></favorite>`,
    /*remember that we use directives to extend the DOM*/
    directives: [CoursesComponent, FavoriteComponent]
    
})


export class AppComponent { }

/*
notes: here we use the courses component to make a new element. 
every component is technically a directive, but the difference is that components have templates, whereas directives don't

in the directives array: be sure to specify any of the components/directives that are used in the template in this component file

the exported class --AppComponent-- on ln16 is the root of the app, it's the view component that takes control of the entire page
*/