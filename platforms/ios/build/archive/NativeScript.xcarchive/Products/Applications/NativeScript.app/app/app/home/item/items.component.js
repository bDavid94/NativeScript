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
    ItemsComponent.prototype.delete = function (id) {
        console.log('clicked delete' + id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUEyQztBQUczQywrQ0FBNkM7QUFRN0M7SUFNSSx3QkFBb0IsV0FBd0IsRUFDeEIsUUFBa0I7UUFEbEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUp0QyxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsU0FBSSxHQUFHLEVBQUUsQ0FBQztJQUdnQyxDQUFDO0lBRTNDLGlDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVoQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztZQUNwQixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBR0QsK0JBQU0sR0FBTixVQUFPLEVBQVU7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU8saUNBQVEsR0FBaEI7UUFBQSxpQkFFQztRQURHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQWhCLENBQWdCLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBMUJRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBQyxDQUFDLHVCQUF1QixDQUFDO1NBQ3RDLENBQUM7eUNBT21DLDBCQUFXO1lBQ2QsaUJBQVE7T0FQN0IsY0FBYyxDQTJCMUI7SUFBRCxxQkFBQztDQUFBLEFBM0JELElBMkJDO0FBM0JZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6W1wiLi9pdGVtcy5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtczogSXRlbVtdO1xuXG4gICAgbmFtZSA9ICcnO1xuICAgIHJvbGUgPSAnJztcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbikgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nZXRJdGVtcygpO1xuXG4gICAgICAgIHRoaXMubG9jYXRpb24uc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0SXRlbXMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBkZWxldGUoaWQ6IG51bWJlcikge1xuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2tlZCBkZWxldGUnICsgaWQpO1xuICAgICAgICB0aGlzLml0ZW1TZXJ2aWNlLmRlbGV0ZShpZCk7XG4gICAgICAgIHRoaXMuZ2V0SXRlbXMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEl0ZW1zKCkge1xuICAgICAgICB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCkuc3Vic2NyaWJlKGl0cyA9PiB0aGlzLml0ZW1zID0gaXRzKTtcbiAgICB9XG59Il19