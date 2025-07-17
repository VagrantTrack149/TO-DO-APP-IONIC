import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
})
export class AddTodoComponent  implements OnInit {
  title: string = '';
  description: string = '';
  tags: string[] = [];
  dueDate: string="";

  constructor(
    private modalController: ModalController,
    private todoService: TodoService
  ) { }
  dismiss(){
    this.modalController.dismiss();
  }
  addTodo(){
    if (this.title.trim() !== '' && this.description.trim() !== '') {
      const dueDate = this.dueDate ? new Date(this.dueDate) : undefined;
      this.todoService.addTodo(this.title, this.description, this.tags, dueDate);
      this.modalController.dismiss();
    }
  }
  ngOnInit() {}

}
