import { Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)' : 'onFocus()',
        '(blur)' : 'onBlur()'
    }
})
export class AutoGrowDirective {
/*inject the necessary AngularService methods to our directive methods 
declare them privately using the '_' character */    
    _el: ElementRef;

    constructor( private el: ElementRef, private renderer: Renderer ) { 
    }
    
    onFocus(){
        this.renderer.setElementStyle( this.el.nativeElement, 'width', '200' );
    }
    
    onBlur() {
        this.renderer.setElementStyle( this.el.nativeElement, 'width', '120' );
    }
}
 
/*
ln4: the css selector from the host element -- use the [] to designate an attribute
so it applies this director to elements in the html 

we use host (ln5) to subsribe events related to this elements NOTE SYNTAX
-- it becomes a method in the directive class, you bind the method to the class

you need to be able to access --that's why ln1 also imports the other two Angular Services
these need to get injected into the methods somehow, 

*/