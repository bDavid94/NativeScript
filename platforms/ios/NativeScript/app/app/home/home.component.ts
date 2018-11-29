import { Component, OnInit } from '@angular/core';
import { TabView } from "tns-core-modules/ui/tab-view";

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id,
})
export class HomeComponent implements OnInit {

  tabSelectedIndex: number;
  
  constructor() { }

  ngOnInit() {
  }

  tabSelected(selectedTab: number) {
    console.log("Switched tabs");
  }

  
}
