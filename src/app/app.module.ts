import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { KanbanTaskComponent } from './kanban/kanban-task/kanban-task.component';
import { KanbanColumnComponent } from './kanban/kanban-column/kanban-column.component';
import { KanbanBoardComponent } from './kanban/kanban-board/kanban-board.component';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './app-material/app-material.module';
import { TaskService } from './services/task.service';

@NgModule({
  declarations: [
    AppComponent,
    KanbanTaskComponent,
    KanbanColumnComponent,
    KanbanBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AppMaterialModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync(),
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
