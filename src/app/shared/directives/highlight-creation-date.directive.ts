import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appHighlightCreationDate]',
})
export class HighlightCreationDateDirective implements OnInit {
	@Input() appHighlightCreationDate: Date | undefined = new Date();

	constructor(private el: ElementRef, private renderer: Renderer2) {}

	ngOnInit() {
		this.checkCreationDate();
	}

	private checkCreationDate() {
		const currentDate = new Date();
		const millisecondsIn14days = 14 * 24 * 60 * 60 * 1000;
		console.log(this.appHighlightCreationDate?.getTime());
		console.log(currentDate?.getTime());
		if (this.appHighlightCreationDate) {
			if (
				this.appHighlightCreationDate < currentDate &&
				this.appHighlightCreationDate.getTime() >=
					currentDate.getTime() - millisecondsIn14days
			) {
				this.renderer.addClass(this.el.nativeElement, 'border-green-400');
			} else if (this.appHighlightCreationDate > currentDate) {
				this.renderer.addClass(this.el.nativeElement, 'border-blue-600');
			}
		}
	}
}
