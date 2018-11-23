"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var item_service_1 = require("./item.service");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(itemService, location) {
        this.itemService = itemService;
        this.location = location;
        this.name = '';
        this.role = '';
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getItems();
        this.location.subscribe(function () {
            _this.getItems();
        });
    };
    ItemsComponent.prototype.save = function () {
        console.log('clicked save', this.name, ' ', this.role);
        this.itemService.save(this.name, this.role);
        this.getItems();
        console.log("******************************** " + this.items.toString());
        this.name = '';
        this.role = '';
    };
    ItemsComponent.prototype.delete = function (id) {
        console.log('clicked delete');
        this.itemService.delete(id);
        this.getItems();
    };
    ItemsComponent.prototype.getItems = function () {
        var _this = this;
        this.itemService.getItems().subscribe(function (its) { return _this.items = its; });
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
            styleUrls: ["./items.component.css"]
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService,
            common_1.Location])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUEyQztBQUczQywrQ0FBNkM7QUFRN0M7SUFNSSx3QkFBb0IsV0FBd0IsRUFDeEIsUUFBa0I7UUFEbEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUp0QyxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsU0FBSSxHQUFHLEVBQUUsQ0FBQztJQUdnQyxDQUFDO0lBRTNDLGlDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVoQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztZQUNwQixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNkJBQUksR0FBSjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBb0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUksQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELCtCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU8saUNBQVEsR0FBaEI7UUFBQSxpQkFFQztRQURHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQWhCLENBQWdCLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBbENRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBQyxDQUFDLHVCQUF1QixDQUFDO1NBQ3RDLENBQUM7eUNBT21DLDBCQUFXO1lBQ2QsaUJBQVE7T0FQN0IsY0FBYyxDQW1DMUI7SUFBRCxxQkFBQztDQUFBLEFBbkNELElBbUNDO0FBbkNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6W1wiLi9pdGVtcy5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtczogSXRlbVtdO1xuXG4gICAgbmFtZSA9ICcnO1xuICAgIHJvbGUgPSAnJztcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbikgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nZXRJdGVtcygpO1xuXG4gICAgICAgIHRoaXMubG9jYXRpb24uc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0SXRlbXMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2F2ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQgc2F2ZScsIHRoaXMubmFtZSwgJyAnLCB0aGlzLnJvbGUpO1xuICAgICAgICB0aGlzLml0ZW1TZXJ2aWNlLnNhdmUodGhpcy5uYW1lLCB0aGlzLnJvbGUpO1xuICAgICAgICB0aGlzLmdldEl0ZW1zKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAke3RoaXMuaXRlbXMudG9TdHJpbmcoKX1gKTsgXG4gICAgICAgIHRoaXMubmFtZSA9ICcnO1xuICAgICAgICB0aGlzLnJvbGUgPSAnJztcbiAgICB9XG5cbiAgICBkZWxldGUoaWQ6IG51bWJlcikge1xuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2tlZCBkZWxldGUnKTtcbiAgICAgICAgdGhpcy5pdGVtU2VydmljZS5kZWxldGUoaWQpO1xuICAgICAgICB0aGlzLmdldEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRJdGVtcygpIHtcbiAgICAgICAgdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtcygpLnN1YnNjcmliZShpdHMgPT4gdGhpcy5pdGVtcyA9IGl0cyk7XG4gICAgfVxufSJdfQ==