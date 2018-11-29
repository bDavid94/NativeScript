"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("../item/item.service");
var utils = require("utils/utils");
var platform_1 = require("platform");
var frame = require("ui/frame");
var CreateComponent = /** @class */ (function () {
    function CreateComponent(itemService) {
        this.itemService = itemService;
        this.name = '';
        this.role = '';
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.save = function () {
        this.dismissSoftKeybaord();
        console.log('clicked save', this.name, ' ', this.role);
        this.itemService.save(this.name, this.role);
        this.name = '';
        this.role = '';
    };
    CreateComponent.prototype.dismissSoftKeybaord = function () {
        if (platform_1.isIOS) {
            frame.topmost().nativeView.endEditing(true);
        }
        if (platform_1.isAndroid) {
            utils.ad.dismissSoftInput();
        }
    };
    __decorate([
        core_1.ViewChild('field1'),
        __metadata("design:type", core_1.ElementRef)
    ], CreateComponent.prototype, "field1", void 0);
    __decorate([
        core_1.ViewChild('field2'),
        __metadata("design:type", core_1.ElementRef)
    ], CreateComponent.prototype, "field2", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUscURBQW1EO0FBRW5ELG1DQUFxQztBQUNyQyxxQ0FBNEM7QUFDNUMsZ0NBQWtDO0FBUWxDO0lBUUUseUJBQW9CLFdBQXlCO1FBQXpCLGdCQUFXLEdBQVgsV0FBVyxDQUFjO1FBTjdDLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixTQUFJLEdBQUcsRUFBRSxDQUFDO0lBS3VDLENBQUM7SUFFbEQsa0NBQVEsR0FBUjtJQUNBLENBQUM7SUFDRCw4QkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELDZDQUFtQixHQUFuQjtRQUNFLElBQUksZ0JBQUssRUFBRTtZQUNSLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsSUFBSSxvQkFBUyxFQUFFO1lBQ2IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzdCO0lBQ0YsQ0FBQztJQXRCbUI7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVMsaUJBQVU7bURBQUM7SUFDbkI7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVMsaUJBQVU7bURBQUM7SUFON0IsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztZQUNyQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FTa0MsMEJBQVc7T0FSbEMsZUFBZSxDQTRCM0I7SUFBRCxzQkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tICcuLi9pdGVtL2l0ZW0uc2VydmljZSc7XG5cbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgaXNJT1MsIGlzQW5kcm9pZCB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0ICogYXMgZnJhbWUgZnJvbSBcInVpL2ZyYW1lXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWNyZWF0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jcmVhdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jcmVhdGUuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBDcmVhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIG5hbWUgPSAnJztcbiAgcm9sZSA9ICcnO1xuXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkMScpIGZpZWxkMTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZmllbGQyJykgZmllbGQyOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2UgOiBJdGVtU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgc2F2ZSgpIHtcbiAgICB0aGlzLmRpc21pc3NTb2Z0S2V5YmFvcmQoKTtcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZCBzYXZlJywgdGhpcy5uYW1lLCAnICcsIHRoaXMucm9sZSk7XG4gICAgdGhpcy5pdGVtU2VydmljZS5zYXZlKHRoaXMubmFtZSwgdGhpcy5yb2xlKTtcbiAgICB0aGlzLm5hbWUgPSAnJztcbiAgICB0aGlzLnJvbGUgPSAnJztcbiAgfVxuICBcbiAgZGlzbWlzc1NvZnRLZXliYW9yZCgpe1xuICAgIGlmIChpc0lPUykge1xuICAgICAgIGZyYW1lLnRvcG1vc3QoKS5uYXRpdmVWaWV3LmVuZEVkaXRpbmcodHJ1ZSk7XG4gICAgfVxuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgIHV0aWxzLmFkLmRpc21pc3NTb2Z0SW5wdXQoKTtcbiAgICB9XG4gICB9XG59XG4iXX0=