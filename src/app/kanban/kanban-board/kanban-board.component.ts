import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../model/Task.model';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.scss'
})
export class KanbanBoardComponent implements OnInit {

  tasks!: Task[];
  status: string[] = ["TO DO", "DOING", "DONE"];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((t: Task[]) => {
      this.tasks = t;
    });
  }

  getTasksByStatus(status: string): Task[] {
    return this.tasks?.filter(t => t.status == status);
  }
}
