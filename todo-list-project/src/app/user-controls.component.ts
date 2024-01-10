import { Component } from "@angular/core";

@Component({
    standalone:true,
    selector:'user-controls',
    template:`
        @if (isAdmin){
            <button>Limpar banco</button>
        }
        @else {
            <p>Você não esta autorizado</p>
        }
    `
})

export class UserControls {
    isAdmin = false;
}