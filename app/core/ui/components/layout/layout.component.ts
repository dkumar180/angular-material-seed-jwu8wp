import {Component, Input} from '@angular/core'

import { config } from '../../ui.config'

@Component({
  selector: 'ui-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  config = config
  containerClass = config.fluid ? 'container-fluid' : 'container'
}
