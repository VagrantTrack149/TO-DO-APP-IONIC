import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { TodoService } from '../services/todo.service';
import { ModalController } from '@ionic/angular';
import { AddTodoComponent } from '../modals/add-todo/add-todo.page';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  todos:any[]=[];

  constructor(
    private todoService: TodoService,
    private modalController: ModalController
  ) {}

  ionViewWillEnter() {
    this.todos = this.todoService.getTodos();
  }

  async openAddTodoModal() {
    const modal = await this.modalController.create({
      component: AddTodoPage
    });
    await modal.present();
    modal.onDidDismiss().then(() => {
      this.todos = this.todoService.getTodos();
    });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.getTodos();
  }
      
}
