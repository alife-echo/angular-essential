import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoList } from './todo-list.component';
import { SignUpForm } from './button-form.component';
import { AppBanner } from './app-banner.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TodoList,SignUpForm,AppBanner],
  template: `
          <ul>
              <todo-list> </todo-list>
              <sign-up-form> </sign-up-form>
              <app-banner> </app-banner>
          </ul>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list-project';
}
