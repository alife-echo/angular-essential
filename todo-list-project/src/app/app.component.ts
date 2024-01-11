import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoList } from './todo-list.component';
import { SignUpForm } from './button-form.component';
import { AppBanner } from './app-banner.component';
import { UserControls } from './user-controls.component';
import { IngredientList } from './ingredient-list.component';
import { TextTransfomer } from './text-transformer.component';
import { ConsoleUser } from './conso-user.component';
import { Receipt } from './app-receipt.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TodoList,SignUpForm,AppBanner,UserControls,IngredientList,TextTransfomer,ConsoleUser,Receipt],
  template: `
          <ul>
              <todo-list> </todo-list>
              <sign-up-form> </sign-up-form>
              <app-banner> </app-banner>
              <user-controls> </user-controls>
              <ingredient-list> </ingredient-list>
              <text-transformer> </text-transformer>
              <console-user> </console-user>
              <app-receipt> </app-receipt>
          </ul>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list-project';
}
