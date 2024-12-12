import { Directive, ElementRef, EventEmitter, HostListener, Output } from "@angular/core";


@Directive({
    selector:'[appDetect]',
    standalone:true
})

export class DetectDirective {
    @Output() isVisible = new EventEmitter<boolean>();
    
    constructor(private el: ElementRef) { }

    @HostListener('window:scroll',['$event'])
    onScroll():void {
        const rect = this.el.nativeElement.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight;
        this.isVisible.emit(isVisible);
    }
}