"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ApplicationSettings = require("application-settings");
var rxjs_1 = require("rxjs");
var ItemService = /** @class */ (function () {
    function ItemService() {
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
        this.items = JSON.parse(ApplicationSettings.getString('items', '[]'));
        ApplicationSettings.setString("items", JSON.stringify(this.items));
    }
    // public items: Array<Item>;
    ItemService.prototype.getItems = function () {
        var _this = this;
        // return this.items;
        return rxjs_1.Observable.create(function (observer) {
            _this.items = JSON.parse(ApplicationSettings.getString('items', '[]'));
            observer.next(_this.items);
            observer.complete();
        });
    };
    ItemService.prototype.getItem = function (id) {
        var _this = this;
        return rxjs_1.Observable.create(function (observer) {
            var it = _this.items.filter(function (item) { return item.id === id; })[0];
            observer.next(it);
            observer.complete();
        });
    };
    ItemService.prototype.save = function (name, role) {
        var id = 0;
        if (this.items.length > 0) {
            console.log('here');
            id = this.items.map(function (item) { return item.id; }).reverse()[0] + 1;
        }
        console.log("the id is " + id);
        this.items.push({ id: id, name: name, role: role });
        ApplicationSettings.setString("items", JSON.stringify(this.items));
    };
    ItemService.prototype.delete = function (id) {
        this.items = this.items.filter(function (el) { return el.id !== id; });
        ApplicationSettings.setString("items", JSON.stringify(this.items));
    };
    ItemService.prototype.update = function (item) {
        this.items = this.items.map(function (el) {
            if (el.id === item.id) {
                el.role = item.role;
                return el;
            }
            else {
                return el;
            }
        });
        ApplicationSettings.setString("items", JSON.stringify(this.items));
    };
    ItemService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDBEQUE0RDtBQUc1RCw2QkFBa0M7QUFLbEM7SUEyQkk7UUExQkEsa0NBQWtDO1FBQ2xDLHlEQUF5RDtRQUN6RCxrREFBa0Q7UUFDbEQseURBQXlEO1FBQ3pELHFEQUFxRDtRQUNyRCwyREFBMkQ7UUFDM0QsbURBQW1EO1FBQ25ELHlEQUF5RDtRQUN6RCxrREFBa0Q7UUFDbEQsa0RBQWtEO1FBQ2xELG1EQUFtRDtRQUNuRCx1REFBdUQ7UUFDdkQseURBQXlEO1FBQ3pELHdEQUF3RDtRQUN4RCx5REFBeUQ7UUFDekQsd0RBQXdEO1FBQ3hELG1EQUFtRDtRQUNuRCw2REFBNkQ7UUFDN0QsMkRBQTJEO1FBQzNELDJEQUEyRDtRQUMzRCxvREFBb0Q7UUFDcEQscURBQXFEO1FBQ3JELHFEQUFxRDtRQUNyRCxLQUFLO1FBQ0UsVUFBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBR3BFLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsNkJBQTZCO0lBR3RCLDhCQUFRLEdBQWY7UUFBQSxpQkFPQztRQU5HLHFCQUFxQjtRQUNyQixPQUFPLGlCQUFVLENBQUMsTUFBTSxDQUFDLFVBQUMsUUFBUTtZQUM5QixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSw2QkFBTyxHQUFkLFVBQWUsRUFBVTtRQUF6QixpQkFNQztRQUxHLE9BQU8saUJBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQyxRQUFRO1lBQzlCLElBQU0sRUFBRSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQWQsQ0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNsQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sMEJBQUksR0FBWCxVQUFZLElBQVksRUFBRSxJQUFZO1FBQ2xDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLEVBQUUsRUFBUCxDQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDM0Q7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWEsRUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFLElBQUksTUFBQSxFQUFDLENBQUMsQ0FBQztRQUN0QyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVNLDRCQUFNLEdBQWIsVUFBYyxFQUFVO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBWixDQUFZLENBQUMsQ0FBQztRQUNyRCxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVNLDRCQUFNLEdBQWIsVUFBYyxJQUFVO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFFO1lBQzNCLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNuQixFQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLE9BQU8sRUFBRSxDQUFDO2FBQ2I7aUJBQU07Z0JBQ0gsT0FBTyxFQUFFLENBQUM7YUFDYjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsbUJBQW1CLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUE3RVEsV0FBVztRQUh2QixpQkFBVSxDQUFDO1lBQ1IsVUFBVSxFQUFFLE1BQU07U0FDckIsQ0FBQzs7T0FDVyxXQUFXLENBOEV2QjtJQUFELGtCQUFDO0NBQUEsQUE5RUQsSUE4RUM7QUE5RVksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5cbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1TZXJ2aWNlIHtcbiAgICAvLyBwdWJsaWMgaXRlbXMgPSBuZXcgQXJyYXk8SXRlbT4oXG4gICAgLy8gICAgIHsgaWQ6IDEsIG5hbWU6IFwiVGVyIFN0ZWdlblwiLCByb2xlOiBcIkdvYWxrZWVwZXJcIiB9LFxuICAgIC8vICAgICB7IGlkOiAzLCBuYW1lOiBcIlBpcXXDqVwiLCByb2xlOiBcIkRlZmVuZGVyXCIgfSxcbiAgICAvLyAgICAgeyBpZDogNCwgbmFtZTogXCJJLiBSYWtpdGljXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgLy8gICAgIHsgaWQ6IDUsIG5hbWU6IFwiU2VyZ2lvXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgLy8gICAgIHsgaWQ6IDYsIG5hbWU6IFwiRGVuaXMgU3XDoXJlelwiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxuICAgIC8vICAgICB7IGlkOiA3LCBuYW1lOiBcIkFyZGFcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAvLyAgICAgeyBpZDogOCwgbmFtZTogXCJBLiBJbmllc3RhXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgLy8gICAgIHsgaWQ6IDksIG5hbWU6IFwiU3XDoXJlelwiLCByb2xlOiBcIkZvcndhcmRcIiB9LFxuICAgIC8vICAgICB7IGlkOiAxMCwgbmFtZTogXCJNZXNzaVwiLCByb2xlOiBcIkZvcndhcmRcIiB9LFxuICAgIC8vICAgICB7IGlkOiAxMSwgbmFtZTogXCJOZXltYXJcIiwgcm9sZTogXCJGb3J3YXJkXCIgfSxcbiAgICAvLyAgICAgeyBpZDogMTIsIG5hbWU6IFwiUmFmaW5oYVwiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxuICAgIC8vICAgICB7IGlkOiAxMywgbmFtZTogXCJDaWxsZXNzZW5cIiwgcm9sZTogXCJHb2Fsa2VlcGVyXCIgfSxcbiAgICAvLyAgICAgeyBpZDogMTQsIG5hbWU6IFwiTWFzY2hlcmFub1wiLCByb2xlOiBcIkRlZmVuZGVyXCIgfSxcbiAgICAvLyAgICAgeyBpZDogMTcsIG5hbWU6IFwiUGFjbyBBbGPDoWNlclwiLCByb2xlOiBcIkZvcndhcmRcIiB9LFxuICAgIC8vICAgICB7IGlkOiAxOCwgbmFtZTogXCJKb3JkaSBBbGJhXCIsIHJvbGU6IFwiRGVmZW5kZXJcIiB9LFxuICAgIC8vICAgICB7IGlkOiAxOSwgbmFtZTogXCJEaWduZVwiLCByb2xlOiBcIkRlZmVuZGVyXCIgfSxcbiAgICAvLyAgICAgeyBpZDogMjAsIG5hbWU6IFwiU2VyZ2kgUm9iZXJ0b1wiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxuICAgIC8vICAgICB7IGlkOiAyMSwgbmFtZTogXCJBbmRyw6kgR29tZXNcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAvLyAgICAgeyBpZDogMjIsIG5hbWU6IFwiQWxlaXggVmlkYWxcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAvLyAgICAgeyBpZDogMjMsIG5hbWU6IFwiVW10aXRpXCIsIHJvbGU6IFwiRGVmZW5kZXJcIiB9LFxuICAgIC8vICAgICB7IGlkOiAyNCwgbmFtZTogXCJNYXRoaWV1XCIsIHJvbGU6IFwiRGVmZW5kZXJcIiB9LFxuICAgIC8vICAgICB7IGlkOiAyNSwgbmFtZTogXCJNYXNpcFwiLCByb2xlOiBcIkdvYWxrZWVwZXJcIiB9LFxuICAgIC8vICk7XG4gICAgcHVibGljIGl0ZW1zID0gSlNPTi5wYXJzZShBcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZygnaXRlbXMnLCAnW10nKSk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgQXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoXCJpdGVtc1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW1zKSk7XG4gICAgfVxuICAgIFxuICAgIC8vIHB1YmxpYyBpdGVtczogQXJyYXk8SXRlbT47XG5cblxuICAgIHB1YmxpYyBnZXRJdGVtcygpOiBPYnNlcnZhYmxlPEl0ZW1bXT4ge1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5pdGVtcztcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IEpTT04ucGFyc2UoQXBwbGljYXRpb25TZXR0aW5ncy5nZXRTdHJpbmcoJ2l0ZW1zJywgJ1tdJykpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh0aGlzLml0ZW1zKTtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJdGVtKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXQgPSB0aGlzLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IGlkKVswXTtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoaXQpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNhdmUobmFtZTogc3RyaW5nLCByb2xlOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGlkID0gMDtcbiAgICAgICAgaWYodGhpcy5pdGVtcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoZXJlJyk7XG4gICAgICAgICAgICBpZCA9IHRoaXMuaXRlbXMubWFwKChpdGVtKSA9PiBpdGVtLmlkKS5yZXZlcnNlKClbMF0gKyAxO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGB0aGUgaWQgaXMgJHtpZH1gKTtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtpZDogaWQsIG5hbWUsIHJvbGV9KTtcbiAgICAgICAgQXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoXCJpdGVtc1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW1zKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZShpZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLmZpbHRlcigoZWwpID0+IGVsLmlkICE9PSBpZCk7XG4gICAgICAgIEFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKFwiaXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pdGVtcykpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoaXRlbTogSXRlbSkge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5tYXAoKGVsKSA9PiB7XG4gICAgICAgICAgICBpZiAoZWwuaWQgPT09IGl0ZW0uaWQpIHtcbiAgICAgICAgICAgICAgICBlbC5yb2xlID0gaXRlbS5yb2xlO1xuICAgICAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgQXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoXCJpdGVtc1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW1zKSk7XG4gICAgfVxufVxuIl19