import {Component, Input} from '@angular/core';
import {SvgIconComponent} from "angular-svg-icon";

@Component({
  selector: 'app-dead-line',
  standalone: true,
  imports: [
    SvgIconComponent
  ],
  templateUrl: './dead-line.component.html',
  styleUrl: './dead-line.component.scss'
})
export class DeadLineComponent {
  @Input({required: true}) date!: string

}
