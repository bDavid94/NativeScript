import { Component, OnInit } from "@angular/core";
import { Location } from '@angular/common';

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    styleUrls:["./items.component.css"]
})
export class ItemsComponent implements OnInit {
    items: Item[];

    name = '';
    role = '';
    
    constructor(private itemService: ItemService,
                private location: Location) { }

    ngOnInit(): void {
        this.getItems();

        this.location.subscribe(() => {
            this.getItems();
        });
    }


    delete(id: number) {
        console.log('clicked delete' + id);
        this.itemService.delete(id);
        this.getItems();
    }

    private getItems() {
        this.itemService.getItems().subscribe(its => this.items = its);
    }
}