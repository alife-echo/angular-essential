import { Component } from "@angular/core";
import { TodoListItem } from "./todo-list-item.component";

@Component({
    standalone:true,
    imports:[TodoListItem],
    selector:'todo-list',
    template:`
        <todo-list-item></todo-list-item>
    `
})

export class TodoList {}