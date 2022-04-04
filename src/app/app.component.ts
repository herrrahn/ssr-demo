import {Component, HostListener} from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ssr-demo';

  text = ' ';

  constructor(private appService: AppService) {
  }


  click() {
    this.appService.testDemo().subscribe( d => this.text = d);
  }

  @HostListener('click')
  pageClick() {
    this.text = 'page click'
  }
}
