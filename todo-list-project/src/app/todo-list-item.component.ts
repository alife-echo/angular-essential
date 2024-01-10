import { Component } from "@angular/core";

@Component({
    standalone:true,
    selector:'todo-list-item',
    template:`
        <li>Title:{{taskTitle}}</li>
    `,
    styleUrl:'./todo-list-item.component.css'
})

export class TodoListItem {
    taskTitle = 'Read a cup of coffee';
}