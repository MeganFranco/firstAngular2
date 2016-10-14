import {Component} from 'angular2/core';
/*your "root component" is nothing but a plain typescript class...
it's just decorated with the componend decorator
also, think of this component as your root view*/
import { CoursesComponent } from './courses.component';
import { AuthorComponent } from './authors.component';
import { AutoGrowDirective } from './auto-grow.directive';
import { FavoriteComponent } from './favorite.component';

@Component({
    selector: 'my-app',
    template: `
        <favorite></favorite>

<!--
        <h1>Hello Angular</h1>
        <input type="text" [value]="title" (input)="title = $event.target.value" />
        
        <input type="button" (click)="title = ''" value="Clear" />
        Preview: {{ title }}
        <courses></courses>
        
        <authors></authors> -->
`,
    /*remember that we use directives to extend the DOM*/
    directives: [CoursesComponent, AuthorComponent, AutoGrowDirective, FavoriteComponent]
    
})


export class AppComponent {
    
}

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