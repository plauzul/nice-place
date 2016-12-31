"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var user_model_1 = require("../../../models/user.model");
var PostsComponent = (function () {
    function PostsComponent() {
    }
    PostsComponent.prototype.calculeHourPost = function (created_at, updated_at) {
        if (created_at == updated_at) {
            var day = created_at.split(" ")[0]; //pego ano mes e dias da hora do post
            var hour = created_at.split(" ")[1]; //pego hora minutos e segundos do post
            var nowDay = (new Date().toISOString().substr(0, 19).replace('T', ' ')).split(" ")[0]; //pego ano mes e dias da hora atual
            var nowHour = (new Date().toISOString().substr(0, 19).replace('T', ' ')).split(" ")[1]; //pego hora minutos e segundos da hora atual
            var year = day.split("-")[0]; //pego o ano a parti da variavel day
            var nowYear = nowDay.split("-")[0]; //pego o ano atual a partir da variavel nowDay
            var month = day.split("-")[1]; //pego o mes a partir da variavel day
            var nowMonth = nowDay.split("-")[1]; //pego o mes a partir da variavel nowDay
            if (year != nowYear) {
                var yearsDifference = parseInt(nowYear) - parseInt(year);
                return "Postado a " + yearsDifference + " ano(s)";
            }
            else {
                if (month != nowMonth) {
                    var differenceMonths = parseInt(nowMonth) - parseInt(month);
                    return "Postado a " + differenceMonths + " mes(ses)";
                }
                else {
                    if (day == nowDay) {
                        var newHour = hour.split(":");
                        var newNowHour = nowHour.split(":");
                        if (newHour[0] == newNowHour[0]) {
                            var minuteDifference = parseInt(newNowHour[1]) - parseInt(newHour[1]);
                            if (minuteDifference == 0) {
                                return "Postado exatamente agora";
                            }
                            else {
                                return "Postado a " + minuteDifference + " minutos";
                            }
                        }
                        else {
                            var timeDifference = parseInt(newNowHour[0]) - parseInt(newHour[0]);
                            return "Postado a " + timeDifference + " hora(s)";
                        }
                    }
                    else {
                        var newNowDay = nowDay.split("-");
                        var newDay = day.split("-");
                        var daysDifference = parseInt(newNowDay[2]) - parseInt(newDay[2]);
                        return "Postado a " + daysDifference + " dia(s)";
                    }
                }
            }
        }
        else {
            var day = updated_at.split(" ")[0];
            var hour = updated_at.split(" ")[1];
            var nowDay = (new Date().toISOString().substr(0, 19).replace('T', ' ')).split(" ")[0];
            var nowHour = (new Date().toISOString().substr(0, 19).replace('T', ' ')).split(" ")[1];
            var year = day.split("-")[0];
            var nowYear = nowDay.split("-")[0];
            var month = day.split("-")[1];
            var nowMonth = nowDay.split("-")[1];
            if (year != nowYear) {
                var yearsDifference = parseInt(nowYear) - parseInt(year);
                return "Post atualizado a " + yearsDifference + " ano(s)";
            }
            else {
                if (month != nowMonth) {
                    var differenceMonths = parseInt(nowMonth) - parseInt(month);
                    return "Post atualizado a " + differenceMonths + " mes(ses)";
                }
                else {
                    if (day == nowDay) {
                        var newHour = hour.split(":");
                        var newNowHour = nowHour.split(":");
                        if (newHour[0] == newNowHour[0]) {
                            var minuteDifference = parseInt(newNowHour[1]) - parseInt(newHour[1]);
                            if (minuteDifference == 0) {
                                return "Post atualizado exatamente agora";
                            }
                            else {
                                return "Post atualizado a " + minuteDifference + " minutos";
                            }
                        }
                        else {
                            var timeDifference = parseInt(newNowHour[0]) - parseInt(newHour[0]);
                            return "Post atualizado a " + timeDifference + " hora(s)";
                        }
                    }
                    else {
                        var newNowDay = nowDay.split("-");
                        var newDay = day.split("-");
                        var daysDifference = parseInt(newNowDay[2]) - parseInt(newDay[2]);
                        return "Post atualizado a " + daysDifference + " dia(s)";
                    }
                }
            }
        }
    };
    PostsComponent.prototype.calculeStars = function (stars) {
        stars = JSON.parse(stars);
        var x = (5 * stars.five + 4 * stars.four + 3 * stars.three + 2 * stars.two + 1 * stars.one);
        var y = (stars.five + stars.four + stars.three + stars.two + stars.one);
        return Math.floor(x / y);
    };
    PostsComponent.prototype.vote = function (stars) {
        console.log(stars);
    };
    return PostsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", user_model_1.UserModel)
], PostsComponent.prototype, "user", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PostsComponent.prototype, "posts", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], PostsComponent.prototype, "havePost", void 0);
PostsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'posts',
        templateUrl: 'posts.html',
        styleUrls: ['posts.css']
    }),
    __metadata("design:paramtypes", [])
], PostsComponent);
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map