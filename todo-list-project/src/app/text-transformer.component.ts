import { Component } from "@angular/core";

@Component({
    standalone:true,
    selector:'text-transformer',
    template:`
         <p>{{announcement}}</p>
         <button (click)="transformerText()">Abracadabra!</button>
    `
})

export class TextTransfomer {
    announcement = 'Hello again Angular!'
    transformerText(){
        this.announcement = this.announcement.toUpperCase()
    }
}