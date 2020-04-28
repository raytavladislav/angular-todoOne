import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Todo } from 'src/app/core/interfaces';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<Todo>();
  @Output() edit = new EventEmitter<Todo>();

  isShowDetails = false;

  public bgColorBadges = {
    'low': 'badge-success',
    'middle': 'badge-warning',
    'hight': 'badge-danger'
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggleTodo(): void {
    this.todo.isDone = !this.todo.isDone;
    this.update.emit(this.todo);
  }

  deleteTodo(todoId: number): void {
    this.delete.emit(todoId);
  }

  toggleDetails(): void{
    this.isShowDetails = !this.isShowDetails
  }

  modalEdit(todo: Todo): void {
    console.log('item', todo)
    this.edit.emit(todo)
  }
}
