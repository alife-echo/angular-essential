import { Component, inject } from "@angular/core";
import { CalculatorService } from "./calculator.service";

@Component({
    selector:'app-receipt',
    template:`<p>The total is {{totalCost}}</p>`,
    standalone:true
})

export class Receipt {
    private calculatorService = inject(CalculatorService)
    totalCost = this.calculatorService.add(50,20)
}