import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component'; // Import TaskListComponent
import { TaskFormComponent } from './task-form/task-form.component'; // Import TaskFormComponent

@Component({
  selector: 'app-root',
  imports: [TaskListComponent, TaskFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-manager-app';
  isDarkMode: boolean = false; // Track dark mode state
  tasks: { title: string; description: string; dueDate: Date | null; priority: string; isComplete: boolean }[] = [];


  // Method to toggle dark mode
     toggleDarkMode() {
       this.isDarkMode = !this.isDarkMode; // Toggle the dark mode state
       if (this.isDarkMode) {
           document.body.style.backgroundColor = 'black';
           document.body.style.color = 'white';
       } else {
           document.body.style.backgroundColor = 'white';
           document.body.style.color = 'black';
       }
   }

   
   ngOnInit() {
    this.loadTasks(); // Load tasks from local storage on initialization
  }

  addTask(task: { title: string; description: string; dueDate: Date | null; priority: string }) {
    this.tasks.push({ ...task, isComplete: false });
    this.saveTasks(); // Save tasks to local storage
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks)); // Save tasks to local storage
  }

  loadTasks() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks); // Load tasks from local storage
    }
  }

}
