import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ItemService } from '../item/item.service';

import * as utils from "utils/utils";
import { isIOS, isAndroid } from "platform";
import * as frame from "ui/frame";

@Component({
  selector: 'ns-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  moduleId: module.id,
})
export class CreateComponent implements OnInit {

  name = '';
  role = '';

  @ViewChild('field1') field1: ElementRef;
  @ViewChild('field2') field2: ElementRef;

  constructor(private itemService : ItemService) { }

  ngOnInit() {
  }
  save() {
    this.dismissSoftKeybaord();
    console.log('clicked save', this.name, ' ', this.role);
    this.itemService.save(this.name, this.role);
    this.name = '';
    this.role = '';
  }
  
  dismissSoftKeybaord(){
    if (isIOS) {
       frame.topmost().nativeView.endEditing(true);
    }
    if (isAndroid) {
      utils.ad.dismissSoftInput();
    }
   }
}
