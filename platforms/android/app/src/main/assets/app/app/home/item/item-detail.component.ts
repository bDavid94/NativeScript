import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
    styleUrls: ["./item-detail.component.css"]
})
export class ItemDetailComponent implements OnInit {
    item: Item;
    editMode = false;
    private oldRole: string;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.itemService.getItem(id).subscribe((it) => this.item = it);
    }

    edit() {
        this.oldRole = this.item.role;
        this.editMode = true;
    }

    cancel() {
        this.item.role = this.oldRole;
        this.editMode = false;
    }

    save() {
        this.itemService.update(this.item);
        this.location.back();
    }

    goBack() {
        this.location.back();
    }
}
