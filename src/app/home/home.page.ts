import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonList, IonItem, IonLabel, IonButton, 
  IonIcon, IonFab, IonFabButton, ModalController 
} from '@ionic/angular/standalone';
import { TodoService } from '../services/todo.service';
import { AddTodoComponent as AddTodoPage } from '../modals/add-todo/add-todo.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItem, IonLabel, IonButton,
    IonIcon, IonFab, IonFabButton,
  ],
})
export class HomePage {
  todos: any[] = [];

  constructor(
    private todoService: TodoService,
    private modalController: ModalController
  ) {}

  ionViewWillEnter() {
    this.todos = this.todoService.getTodos();
  }

  async openAddTodoModal() {
    const modal = await this.modalController.create({
      component: AddTodoPage,
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