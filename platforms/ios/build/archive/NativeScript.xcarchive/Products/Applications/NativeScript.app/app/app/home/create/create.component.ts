import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'ns-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  moduleId: module.id,
})
export class CreateComponent implements OnInit {

  name = '';
  role = '';

  constructor(private itemService : ItemService) { }

  ngOnInit() {
  }
  save() {
    console.log('clicked save', this.name, ' ', this.role);
    this.itemService.save(this.name, this.role);
    this.name = '';
    this.role = '';
  }
}
