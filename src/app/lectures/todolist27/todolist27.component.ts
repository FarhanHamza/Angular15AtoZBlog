import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist27',
  templateUrl: './todolist27.component.html',
  styleUrls: ['./todolist27.component.css']
})
export class Todolist27Component {
  title = "To do list App";

  myTodo = [];
  addToDo(work: string) {
    debugger
    if (work.trim().length >= 1) {
      this.myTodo.push({ id: this.myTodo.length, name: work })
      alert('work is added!')
    } else alert('work is empty')
  }


  removeTodo(isId: number) {
    debugger
    this.myTodo = this.myTodo.filter(item => item.id !== isId)
  }
}
