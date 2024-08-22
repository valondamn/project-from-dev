import { Component, Input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgClass, NgStyle } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {AccordionCard} from "../../interfaces/accordion-card.interface";

@Component({
  selector: 'app-accordion-card',
  templateUrl: './accordion-card.component.html',
  styleUrls: ['./accordion-card.component.scss'],
  standalone: true,
  imports: [AngularSvgIconModule, NgStyle, NgClass],
  animations: [
    trigger('contentExpansion', [
      state('expanded', style({ height: '*', opacity: 1, display: 'block' })),
      state('collapsed', style({ height: '0px', opacity: 0, display: 'none' })),
      transition(
        'expanded <=> collapsed',
        animate('300ms cubic-bezier(.37,1.04,.68,.98)'),
      ),
    ]),
  ],
})
export class AccordionCardComponent {
  @Input({ required: true }) menus!: AccordionCard[];
  @Input() width: string = '100%';
  @Input() gap: string = '24px';
  @Input() hasBorder: boolean = true;
  @Input() borderRadius: string = '8px';
  @Input() isExpanded: boolean = false;

  trigger(index: number) {
    this.menus.forEach((menu, i) => {
      if (i === index) {
        menu.active = !menu.active;
      } else {
        menu.active = false;
      }
    });
  }
}
