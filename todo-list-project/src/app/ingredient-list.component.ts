import { Component } from "@angular/core";

@Component({
    standalone:true,
    selector:'ingredient-list',
    templateUrl:'./ingredient-list.component.html'
})

export class IngredientList {
    ingredientList = [
        {name:'noodles',quantity:1},
        {name:'miso broth',quantity:1},
        {name:'egg',quantity:2},
    ]
    getValue(event: Event): string {
        console.log((event.target as HTMLInputElement).value)
        return (event.target as HTMLInputElement).value;
      }
}