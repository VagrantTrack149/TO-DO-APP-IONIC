import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class AddTodoComponent {
  title: string = '';
  description: string = '';
  tags: string[] = [];
  dueDate: string = "";

  constructor(
    private modalController: ModalController,
    private todoService: TodoService
  ) { }

  dismiss() {
    this.modalController.dismiss();
  }

  addTodo() {
    if (this.title.trim() !== '' && this.description.trim() !== '') {
      const dueDateObj = this.dueDate ? new Date(this.dueDate) : undefined;
      this.todoService.addTodo(this.title, this.description, this.tags, dueDateObj);
      this.modalController.dismiss();
    }
  }
}