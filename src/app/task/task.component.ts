import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  title: string = '';
  description: string = '';
  dueDate: Date | null = null;
  priority: string = 'normal';
  isComplete: boolean = false;

  markAsComplete() {
    this.isComplete = true;
  }
}
