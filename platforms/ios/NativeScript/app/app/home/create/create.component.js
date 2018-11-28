"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("../item/item.service");
var CreateComponent = /** @class */ (function () {
    function CreateComponent(itemService) {
        this.itemService = itemService;
        this.name = '';
        this.role = '';
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.save = function () {
        console.log('clicked save', this.name, ' ', this.role);
        this.itemService.save(this.name, this.role);
        this.name = '';
        this.role = '';
    };
    CreateComponent = __decorate([
        core_1.Component({
            selector: 'ns-create',
            templateUrl: './create.component.html',
            styleUrls: ['./create.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQscURBQW1EO0FBUW5EO0lBS0UseUJBQW9CLFdBQXlCO1FBQXpCLGdCQUFXLEdBQVgsV0FBVyxDQUFjO1FBSDdDLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixTQUFJLEdBQUcsRUFBRSxDQUFDO0lBRXVDLENBQUM7SUFFbEQsa0NBQVEsR0FBUjtJQUNBLENBQUM7SUFDRCw4QkFBSSxHQUFKO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQWRVLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7WUFDckMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBTWtDLDBCQUFXO09BTGxDLGVBQWUsQ0FlM0I7SUFBRCxzQkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSAnLi4vaXRlbS9pdGVtLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1jcmVhdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3JlYXRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3JlYXRlLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBuYW1lID0gJyc7XG4gIHJvbGUgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlIDogSXRlbVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIHNhdmUoKSB7XG4gICAgY29uc29sZS5sb2coJ2NsaWNrZWQgc2F2ZScsIHRoaXMubmFtZSwgJyAnLCB0aGlzLnJvbGUpO1xuICAgIHRoaXMuaXRlbVNlcnZpY2Uuc2F2ZSh0aGlzLm5hbWUsIHRoaXMucm9sZSk7XG4gICAgdGhpcy5uYW1lID0gJyc7XG4gICAgdGhpcy5yb2xlID0gJyc7XG4gIH1cbn1cbiJdfQ==