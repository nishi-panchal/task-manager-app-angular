import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  title: string = '';
  description: string = '';
  dueDate: Date | null = null;
  priority: string = 'normal'; // Example priorities: 'low', 'normal', 'high'

  @Output() taskCreated = new EventEmitter<{ title: string; description: string; dueDate: Date | null; priority: string }>();

  // Method to handle form submission
  onSubmit() {
    this.taskCreated.emit({
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority
    });

    // Reset the form fields
    this.title = '';
    this.description = '';
    this.dueDate = null;
    this.priority = 'normal';
  }
}