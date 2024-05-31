import { Component, ElementRef, Input } from '@angular/core';
import { Task } from '../../model/Task.model';

@Component({
  selector: 'app-kanban-column',
  templateUrl: './kanban-column.component.html',
  styleUrl: './kanban-column.component.scss'
})
export class KanbanColumnComponent {

  @Input() status!: string;
  @Input() tasks!: Task[];

  constructor(private element: ElementRef) { }

  onDragStart(e: DragEvent) {
    e.stopPropagation();
    (e.target as HTMLElement).classList.add('is-dragging')
  }

  onDragEnd(e: DragEvent) {
    (e.target as HTMLElement).classList.remove('is-dragging')
  }

  onDragOver(e: DragEvent) {
    e.preventDefault();
    let curTask = document.querySelector(".is-dragging");
    let bottomTask = this.insertAboveTask(e.clientY);

    if (!bottomTask) {
      this.element.nativeElement.querySelector("div").appendChild(curTask);
    } else {
      this.element.nativeElement.querySelector("div").insertBefore(curTask, bottomTask);
    }

  }

  insertAboveTask(mouseY: number): HTMLElement | null {
    const els = this.element.nativeElement.querySelectorAll(".task:not(.is-dragging)");

    let closestTask: HTMLElement | null = null;
    let closestOffset = Number.NEGATIVE_INFINITY;

    els.forEach((task: HTMLElement) => {
      const { top } = task.getBoundingClientRect();

      const offset = mouseY - top - 44;

      if (offset < 0 && offset > closestOffset) {
        closestOffset = offset;
        closestTask = task;
      }
    });

    return closestTask;
  }
}
