import { Component, OnInit, Input, OnDestroy, OnChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy, OnChanges {
  @Input() title: string;
  @Input() subTitle: string;

  @Output() testOutput = new EventEmitter<string>();

  // isType = true
  // title = 'Angular 2Do!'
  isLogined = false;
  titleFontSize = '46px'
  subName = 'Educaion!'
  dataList = ['Angular', 'TS', 'CSS']


  constructor() { }

  ngOnInit() {
    // setTimeout(() =>  {
    //   this.subName = '123 Edited';
    // }, 5000);
  }

  ngOnDestroy() {

  }

  ngOnChanges() {
    
  }

  login(event): void {
    console.log('logIn')
    this.testOutput.emit('Header login works');
}

  // addItem(item: string): void{
  //   this.dataList.push(item);
  // }

}