import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'angular-todoOne';
    headerTitle = 'Angular-TodoOne';
    headerSubTitle = 'Educational project';

    testOutputApp(data: string): void {
      // console.log(data)
      this.headerSubTitle = data;
    }
}
