import { Component } from '@angular/core';
import {Tab} from "../../shared/interfaces/tab.interface";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public tab: Tab[] =[
    {
      title: 'Title',
      link: 'link'
    },
    {
      title: 'Title',
      link: 'link'
    },
    {
      title: 'Title',
      link: 'link'
    }
  ]


}
