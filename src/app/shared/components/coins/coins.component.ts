import {Component, Input} from '@angular/core';
import {SvgIconComponent} from 'angular-svg-icon';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-coins',
  standalone: true,
  imports: [SvgIconComponent, RouterLink],
  templateUrl: './coins.component.html',
  styleUrl: './coins.component.scss',
})
export class CoinsComponent {
  @Input({required: true}) coins!: number | undefined;
  @Input() isLink: boolean = false;
  @Input() isWalletCoins: boolean = false;
}
