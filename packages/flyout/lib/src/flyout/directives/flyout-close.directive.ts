import { Directive, HostListener, Host, HostBinding } from '@angular/core';

import { FlyoutDirective } from './flyout.directive';

@Directive({
	selector: '[auiFlyoutClose]',
	exportAs: 'auiFlyoutClose',
})
export class FlyoutCloseDirective {
	@HostBinding('attr.role') role = 'button';

	constructor(
		@Host() public flyout: FlyoutDirective
	) {}

	@HostListener('click')
	public onClick(): void {
		this.flyout.close();
	}
}
