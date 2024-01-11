import { Component } from "@angular/core";

@Component({
    standalone:true,
    selector:'console-user',
    template:`
    <button (click)="printUser($event)">Submit</button>
    `
})

export class ConsoleUser {

    printUser(event:Event):string {
        console.log((event.target as HTMLInputElement).value)
        return (event.target as HTMLInputElement).value
    }
    
}