/*grab the component decorator --> decorators are functions, and you will have to call them in your file*/
import { Component } from 'angular2/core'
//dependancy injection
import { AuthorService } from './author.service'

/*add the comonent decorator*/
    @Component({
        /*add your attrubutes*/
        selector: 'authors',
        template: ` 
            <h2>Authors</h2>
            {{ title }}
            <ul>
                <li *ngFor="#author of authors"> 
                    {{ author }}
                </li>
            </ul>
            `, 
        providers: [AuthorService]
    })
    
export class AuthorComponent {
    
    title = "The title of the authors page";
    courses;
    constructor ( authorService: AuthorService ) {
        
        this.authors = authorService.getAuthors();
    }
}
