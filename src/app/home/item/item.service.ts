import { Injectable } from "@angular/core";
import * as ApplicationSettings from "application-settings";

import { Item } from "./item";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    // public items = new Array<Item>(
    //     { id: 1, name: "Ter Stegen", role: "Goalkeeper" },
    //     { id: 3, name: "Piqué", role: "Defender" },
    //     { id: 4, name: "I. Rakitic", role: "Midfielder" },
    //     { id: 5, name: "Sergio", role: "Midfielder" },
    //     { id: 6, name: "Denis Suárez", role: "Midfielder" },
    //     { id: 7, name: "Arda", role: "Midfielder" },
    //     { id: 8, name: "A. Iniesta", role: "Midfielder" },
    //     { id: 9, name: "Suárez", role: "Forward" },
    //     { id: 10, name: "Messi", role: "Forward" },
    //     { id: 11, name: "Neymar", role: "Forward" },
    //     { id: 12, name: "Rafinha", role: "Midfielder" },
    //     { id: 13, name: "Cillessen", role: "Goalkeeper" },
    //     { id: 14, name: "Mascherano", role: "Defender" },
    //     { id: 17, name: "Paco Alcácer", role: "Forward" },
    //     { id: 18, name: "Jordi Alba", role: "Defender" },
    //     { id: 19, name: "Digne", role: "Defender" },
    //     { id: 20, name: "Sergi Roberto", role: "Midfielder" },
    //     { id: 21, name: "André Gomes", role: "Midfielder" },
    //     { id: 22, name: "Aleix Vidal", role: "Midfielder" },
    //     { id: 23, name: "Umtiti", role: "Defender" },
    //     { id: 24, name: "Mathieu", role: "Defender" },
    //     { id: 25, name: "Masip", role: "Goalkeeper" },
    // );
    public items = JSON.parse(ApplicationSettings.getString('items', '[]'));

    constructor() {
        ApplicationSettings.setString("items", JSON.stringify(this.items));
    }
    
    // public items: Array<Item>;


    public getItems(): Observable<Item[]> {
        // return this.items;
        return Observable.create((observer) => {
            this.items = JSON.parse(ApplicationSettings.getString('items', '[]'));
            observer.next(this.items);
            observer.complete();
        });
    }

    public getItem(id: number): Observable<Item> {
        return Observable.create((observer) => {
            const it = this.items.filter(item => item.id === id)[0];
            observer.next(it);
            observer.complete();
        });
    }

    public save(name: string, role: string) {
        let id = 0;
        if(this.items.length > 0){
            console.log('here');
            id = this.items.map((item) => item.id).reverse()[0] + 1;
        }
        console.log(`the id is ${id}`);
        this.items.push({id: id, name, role});
        ApplicationSettings.setString("items", JSON.stringify(this.items));
    }

    public delete(id: number) {
        this.items = this.items.filter((el) => el.id !== id);
        ApplicationSettings.setString("items", JSON.stringify(this.items));
    }

    public update(item: Item) {
        this.items = this.items.map((el) => {
            if (el.id === item.id) {
                el.role = item.role;
                return el;
            } else {
                return el;
            }
        });
        ApplicationSettings.setString("items", JSON.stringify(this.items));
    }
}
