import { Directive, ElementRef, EventEmitter, HostListener, Output } from "@angular/core";


@Directive({
    selector:'[appDetect]',
    standalone:true
})

export class DetectDirective {
    @Output() isVisible = new EventEmitter<boolean>();
    
    constructor(private el: ElementRef) { }

    emitVisibility():void{
        const rect = this.el.nativeElement.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight;
        this.isVisible.emit(isVisible);
    }
    @HostListener('window:scroll',['$event'])
    onScroll():void {
        this.emitVisibility();
    };
    @HostListener('window:load',['$event'])
    onLoad():void{
        this.emitVisibility();
    };
}