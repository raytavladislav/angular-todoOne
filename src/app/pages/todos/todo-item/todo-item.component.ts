import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Todo } from 'src/app/core/interfaces';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NewTodoComponent } from '../new-todo/new-todo.component';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Input() modalRef: BsModalRef

  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<Todo>();
  @Output() edit = new EventEmitter<Todo>();
  

  isShowDetails = false;

  bgColorBadges = {
    'low': 'badge-success',
    'middle': 'badge-warning',
    'hight': 'badge-danger'
  }

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
  }

  toggleTodo(): void {
    this.todo.isDone = !this.todo.isDone;
    // this.update.emit(this.todo);
    this.updateTodo(this.todo);
  }

  deleteTodo(todoId: number): void {
    this.delete.emit(todoId);
  }

  toggleDetails(): void{
    this.isShowDetails = !this.isShowDetails
    // this.updateTodo(this.todo);
  }

  updateTodo(todo: Todo): void {
    this.update.emit(todo);
  }

 editTodo(todo: Todo): void {
  console.log(this.todo);
  this.modalRef = this.modalService.show(NewTodoComponent,
    Object.assign({}, {
      ignoreBackdropClick: true,
      initialState: {
        todoData: this.todo,
        submit: this.updateTodo.bind(this)
      }
    })
  );
  }
}
