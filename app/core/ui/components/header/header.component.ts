import { Component, Input  } from '@angular/core'

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() title
  @Input() links = []
}
