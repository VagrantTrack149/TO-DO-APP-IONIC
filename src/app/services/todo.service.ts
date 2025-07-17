import { Injectable } from '@angular/core';

interface Todo{
  id: number;
  title: string;
  completed: boolean;
  dueDate?: Date;
  description: string;
  tags: string[];
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[]=[];
  constructor() { }
  getTodos(): Todo[]{
    return this.todos;
  }
  addTodo(title:string,description:string,tags:string[],dueDate?:Date): void{
    this.todos.push({
      id: this.todos.length+1,
      title,
      dueDate,
      completed: false,
      description,
      tags
    });
  }
  deleteTodo(id:number): void{
    this.todos=this.todos.filter(todo=>todo.id!==id);
  }

}
