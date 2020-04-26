import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Todo } from 'src/app/core/interfaces';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})

export class NewTodoComponent implements OnInit {
  // @Output() newTodo = new EventEmitter<Todo>();

  newTodoForm: FormGroup;
  isSubmit = false;
  // isValid = false;
  // isTrueLength = false;

  constructor(
    private modalRef: BsModalRef,
    private fb: FormBuilder 
   ) { }

  ngOnInit(): void {
    this.createNewTodoForm();
  }

  onSubmit(): void{
    this.isSubmit = true;
    // this.isValid = true;

    if (this.newTodoForm.invalid){
      return;
    }

    // if (this.newTodoForm.get('title').errors.minlength) {
    //   this.isTrueLength = true;
    // }

    // this.submit(this.newTodoForm.value);
    // this.newTodo.emit(this.newTodoForm.value);

    this.newTodoForm.reset();
    this.isSubmit = false;
    this.hideModal();
  }

  hideModal() {
    this.modalRef.hide();
  }

  private createNewTodoForm(): void{
    this.newTodoForm = this.fb.group({
      title:[
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      description: [''],
      // priority: [
      //   '',
      //   Validators.required
      // ],
      // isDone: [false]
    });
  }

  submit(todo: Todo): void {}

}
