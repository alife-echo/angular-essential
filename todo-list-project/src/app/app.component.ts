import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoList } from './todo-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TodoList],
  template: `
          <ul>
              <todo-list> </todo-list>
          </ul>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list-project';
}
