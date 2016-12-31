import { Component, Input } from '@angular/core';
import { UserModel } from '../../../models/user.model';
import { PostModel } from '../../../models/post.model';

@Component({
    moduleId: module.id,
    selector: 'posts',
    templateUrl: 'posts.html',
    styleUrls: ['posts.css']
})

export class PostsComponent {

    @Input() user: UserModel;
    @Input() posts: PostModel[];
    @Input() havePost: boolean;

    calculeHourPost(created_at: string, updated_at: string) {
        if(created_at == updated_at) {//se post não tiver sido atualizado
            let day = created_at.split(" ")[0];//pego ano mes e dias da hora do post
            let hour = created_at.split(" ")[1];//pego hora minutos e segundos do post
            let nowDay = (new Date().toISOString().substr(0, 19).replace('T', ' ')).split(" ")[0];//pego ano mes e dias da hora atual
            let nowHour = (new Date().toISOString().substr(0, 19).replace('T', ' ')).split(" ")[1];//pego hora minutos e segundos da hora atual
            let year = day.split("-")[0];//pego o ano a parti da variavel day
            let nowYear = nowDay.split("-")[0];//pego o ano atual a partir da variavel nowDay
            let month = day.split("-")[1];//pego o mes a partir da variavel day
            let nowMonth = nowDay.split("-")[1];//pego o mes a partir da variavel nowDay

            if(year != nowYear) {//se os anos forem diferentes apenas retorno a diferença entre eles
                let yearsDifference = parseInt(nowYear) - parseInt(year);
                return `Postado a ${yearsDifference} ano(s)`;
            }else {//se forem iguais os anos
                if(month != nowMonth) {//se os meses forem diferentes retorno apenas a diferença entre eles
                    let differenceMonths = parseInt(nowMonth) - parseInt(month);
                    return `Postado a ${differenceMonths} mes(ses)`;
                } else {//se forem iguais os meses
                    if(day == nowDay) {//se os dias forem iguais, significa que então ou as horas são iguais ou os minutos 
                        let newHour = hour.split(":");
                        let newNowHour = nowHour.split(":");

                        if(newHour[0] == newNowHour[0]) {// se os minutos forem iguais retorno a diferença entre eles
                            let minuteDifference = parseInt(newNowHour[1]) - parseInt(newHour[1]);
                            if(minuteDifference == 0) {//se a diferença for iguais a zero, significa que então so os segundos são diferentes, logo, foi postado agora
                                return "Postado exatamente agora";
                            } else {//diferença dos minutos
                                return `Postado a ${minuteDifference} minutos`;
                            }
                        } else {//agora se as horas do mesmo dia forem diferentes, retorno sua diferença
                            let timeDifference = parseInt(newNowHour[0]) - parseInt(newHour[0]);
                            return `Postado a ${timeDifference} hora(s)`;
                        }
                    } else {//se os dias não forem diferentes, retorno a sua diferença
                        let newNowDay = nowDay.split("-");
                        let newDay = day.split("-");
                        let daysDifference = parseInt(newNowDay[2]) - parseInt(newDay[2]);
                        return `Postado a ${daysDifference} dia(s)`;
                    }
                }
            }
        } else {//daqui pra baixo é a mesma coisa da de cima, so muda as frase de retorno, e a comparação não é com created_at e sim com updated_at
            let day = updated_at.split(" ")[0];
            let hour = updated_at.split(" ")[1];
            let nowDay = (new Date().toISOString().substr(0, 19).replace('T', ' ')).split(" ")[0];
            let nowHour = (new Date().toISOString().substr(0, 19).replace('T', ' ')).split(" ")[1];
            let year = day.split("-")[0];
            let nowYear = nowDay.split("-")[0];
            let month = day.split("-")[1];
            let nowMonth = nowDay.split("-")[1];

            if(year != nowYear) {
                let yearsDifference = parseInt(nowYear) - parseInt(year);
                return `Post atualizado a ${yearsDifference} ano(s)`;
            }else {
                if(month != nowMonth) {
                    let differenceMonths = parseInt(nowMonth) - parseInt(month);
                    return `Post atualizado a ${differenceMonths} mes(ses)`;
                } else {
                    if(day == nowDay) {
                        let newHour = hour.split(":");
                        let newNowHour = nowHour.split(":");

                        if(newHour[0] == newNowHour[0]) {
                            let minuteDifference = parseInt(newNowHour[1]) - parseInt(newHour[1]);
                            if(minuteDifference == 0) {
                                return "Post atualizado exatamente agora";
                            } else {
                                return `Post atualizado a ${minuteDifference} minutos`;
                            }
                        } else {
                            let timeDifference = parseInt(newNowHour[0]) - parseInt(newHour[0]);
                            return `Post atualizado a ${timeDifference} hora(s)`;
                        }
                    } else {
                        let newNowDay = nowDay.split("-");
                        let newDay = day.split("-");
                        let daysDifference = parseInt(newNowDay[2]) - parseInt(newDay[2]);
                        return `Post atualizado a ${daysDifference} dia(s)`;
                    }
                }
            }
        }
    }

    calculeStars(stars: any) {
        stars = JSON.parse(stars);
        let x = (5 * stars.five + 4 * stars.four + 3 * stars.three + 2 * stars.two + 1 * stars.one);
        let y = (stars.five + stars.four + stars.three + stars.two + stars.one);
        return Math.floor(x / y);
    }

    vote(stars: any) {
        console.log(stars);
    }
}