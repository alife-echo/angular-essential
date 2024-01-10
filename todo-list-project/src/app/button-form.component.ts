import { Component } from "@angular/core";

@Component({
   standalone:true,
   selector:'sign-up-form',
   styles:`
        button{
            padding: 1rem;
            background-color: black;
            font-size: 1.3rem;
            color:white;
        }
        button:disabled{
            background-color: gray;
            transition:  ease-in 300ms;
        }
   `,
   template:`
      <button type="submit" (click)="isInvalid()" [disabled]="formIsInvalid">ENVIAR</button>
   `
})

export class SignUpForm {
    
    formIsInvalid = false
    isInvalid(){
        this.formIsInvalid = !this.formIsInvalid
    }
}