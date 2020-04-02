import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  // title = 'Angular 2Do!'
  isLogined = false;
  titleFontSize = '46px'

  subName = 'Educaion!'
  constructor() { }

  ngOnInit() {
    setTimeout(() =>  {
      this.subName = '123 Edited';
    }, 5000);
  }


login(event): void {
  // console.log('LogIn', event)
  this.isLogined = !this.isLogined;
  console.log('LogIn', event)
}



}