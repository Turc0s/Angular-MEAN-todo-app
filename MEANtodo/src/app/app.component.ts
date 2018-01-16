import { Component } from '@angular/core';
import { TaskService } from "./services/task.service";


import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ TaskService ]
})
export class AppComponent {
  title = 'app';
}
