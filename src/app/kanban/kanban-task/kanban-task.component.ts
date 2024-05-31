import { Component, Input } from '@angular/core';
import { Task } from '../../model/Task.model';

@Component({
  selector: 'app-kanban-task',
  templateUrl: './kanban-task.component.html',
  styleUrl: './kanban-task.component.scss'
})
export class KanbanTaskComponent {

  @Input() task!: Task;


  onMouseDown(e: MouseEvent) {
    e.stopPropagation();
  }

}
