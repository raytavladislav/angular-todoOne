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

    // this.submit(this.newTodoForm.value);
    // this.newTodo.emit(this.newTodoForm.value);
    this.submit(this.newTodoForm.value);

    this.isSubmit = false;
    this.hideModal();
    this.newTodoForm.reset();
  }

  hideModal() {
    this.modalRef.hide();
  }

  private createNewTodoForm(): void{
    this.newTodoForm = this.fb.group({
      // id: [],
      title:[
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      description: [''],
      isDone: [false],
      priority: [
        '',
        Validators.required
      ]
    });
  }
  submit(todo: Todo): void {}
}


// this.newTodoForm = this.fb.group({
//   id: [
//     this.modalRef ? this.modalData.title : '',
//   ],
//   title:[
//     this.modalData ? this.modalData.title : '',
//     [
//       Validators.required,
//       Validators.minLength(3)
//     ]
//   ],
//   description: [
//     this.modalData ? this.modalData.description : '',
//   ],
//   isDone: [
//     this.modalData ? this.modalData.isDone : false
//   ],
//   priority: [
//     this.modalData ? this.modalData.priority : null,
//     Validators.required
//   ]
// });
// }