
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule to use ngModel in forms
    TaskComponent, // Import standalone components
    TaskListComponent,
    TaskFormComponent
  ],
  providers: [],
})
export class AppModule { }
