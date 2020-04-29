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
  
  newTodoForm: FormGroup;
  isSubmit = false;
  modalData: Todo;

  constructor(
    private modalRef: BsModalRef,
    private fb: FormBuilder 
  ) { }

  ngOnInit(): void {
    this.createNewTodoForm();
  }

  onSubmit(): void{
    this.isSubmit = true;

    if (this.newTodoForm.invalid){
      return;
    }

    this.submit(this.newTodoForm.value);

    this.isSubmit = false;
    this.hideModal();
    this.newTodoForm.reset();
  }

  hideModal() {
    this.modalRef.hide();
  }

  submit(todo: Todo): void {}

  private createNewTodoForm(): void{
    this.newTodoForm = this.fb.group({
      id: [
            this.modalData ? this.modalData.id : '',
      ],
      title:[
        this.modalData ? this.modalData.title : '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      description: [
        this.modalData ? this.modalData.description : '',
      ],
      isDone: [
        this.modalData ? this.modalData.isDone : false
      ],
      priority: [
        this.modalData ? this.modalData.priority : null,
        Validators.required
      ]
    });
  }
}