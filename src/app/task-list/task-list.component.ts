import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: { title: string; description: string; dueDate: Date | null; priority: string; isComplete: boolean }[] = [];

  // Method to mark a task as complete
  markAsComplete(task: any) {
    task.isComplete = true; // Set the task as complete
  }

  // Method to delete a task
  deleteTask(index: number) {
    this.tasks.splice(index, 1); // Remove the task from the list
  }
}