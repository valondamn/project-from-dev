import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {HeaderService} from "../../../core/services/header.service";
import {Tab} from "../../interfaces/tab.interface";
import {WINDOW} from "../../injectors/window";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnChanges, AfterViewInit {
  @Input() tabs: Tab[] = [];
  @Input() padding: string = '0';
  @Input() justifyContent: 'start' | 'center' = 'start';
  @Input() currentTab!: Tab;
  @Output() onChange = new EventEmitter<Tab>();
  @Input() hasBorder: boolean = true;
  @Input() width: string = '';
  @Input() isSticky: boolean = true

  top: number = 0;

  constructor(
    private elementRef: ElementRef,
    public headerService: HeaderService,
    @Inject(WINDOW) private window: Window,
    @Inject(DOCUMENT) private document: Document,
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tabs'] && !changes['currentTab']) {
      this.setActiveTab(this.tabs[0]);
      return;
    }

    if (changes['currentTab']) {
      this.setActiveTab(changes['currentTab'].currentValue);
    }
  }

  ngAfterViewInit(): void {
  }

  setActiveTab(tab: Tab) {
    let tabs = [...this.tabs];
    let nextTab = tabs.find((item) => item === tab);

    if (this.document.documentElement.scrollTop > this.top - 140) {
      this.document.documentElement.scrollTo(0, this.top - 140);
    }

    if (nextTab) {
      this.activateTab(nextTab);
      return;
    }

    this.activateTab(this.tabs[0]);
  }

  activateTab(tab: Tab) {
    if (tab === this.currentTab) {
      return;
    }
    this.currentTab = tab;
    this.onChange.emit(tab);
  }

  @HostBinding('style.border-right')
  get verticalBorder() {
    return this.hasBorder ? '1px solid #D1D1D1' : 'none';
  }
}
