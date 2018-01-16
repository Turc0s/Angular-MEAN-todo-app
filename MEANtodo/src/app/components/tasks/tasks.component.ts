import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../services/task.service";
import { Task } from "../../../Task";

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  title: string;

  constructor(private _taskService: TaskService) {
      this._taskService.getTasks().subscribe(tasks => {
          this.tasks = tasks;
      });
   }

  ngOnInit() {
  }

  addTask(event) {
    event.preventDefault();
    console.log(this.title);
  }


}
