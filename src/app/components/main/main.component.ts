import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;

  @Output() testOutput = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  logIn(): void{
    this.testOutput.emit('Header login works!')
  }
}
