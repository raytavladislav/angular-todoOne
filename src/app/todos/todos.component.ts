import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Todo } from 'src/app/core/interfaces';
import { TodoService } from '../core/services/todo/todo.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NewTodoComponent } from '../pages/todos/new-todo/new-todo.component';
// import { BsModalService } from 'ngx-bootstrap/modal/ngx-bootstrap-modal';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal/public_api';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal/ngx-bootstrap-modal';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit, OnDestroy {
  todoList: Array<Todo>;
  search: string;
  modalRef: BsModalRef;

  private unsubscribe = new Subject();

  constructor(
    private todoService: TodoService,
    private modalService: BsModalService
  ) { }

   

  ngOnInit(): void {
    this.getTodos()
  }

  openModal() {
    this.modalRef = this.modalService.show(NewTodoComponent,
      Object.assign({}, {
        ignoreBackdropClick: true,
        initialState: {
          sumit: this.addTodo.bind(this)
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  updateTodo(todo: Todo): void {
    this.todoService.updateTodo(todo)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe()
  }

  deleteTodo(todoId: number): void {
    this.todoService.deleteTodo(todoId)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(() => {
      this.getTodos();
    });
  }

  async addTodo(todo: Todo): Promise<void> {
    const res = await this.todoService.addTodo(todo)
    .toPromise();

    this.getTodos();
    // .pipe(takeUntil(this.unsubscribe))
    // .subscribe(() => {
    //   this.getTodos();
    // });
  }

  private getTodos(): void {
    this.todoService.getTodos()
    .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        data => [
          this.todoList = data
        ],
        error => console.error(error)
      );
  }
  
}
