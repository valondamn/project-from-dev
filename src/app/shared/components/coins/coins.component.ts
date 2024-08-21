import {Component, Input} from '@angular/core';
import {SvgIconComponent} from "angular-svg-icon";

@Component({
  selector: 'app-coins',
  standalone: true,
  imports: [
    SvgIconComponent
  ],
  templateUrl: './coins.component.html',
  styleUrl: './coins.component.scss'
})
export class CoinsComponent {
  @Input({required: true}) coins!: number

}
