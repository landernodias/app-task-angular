import { Component, DoCheck, OnInit } from '@angular/core';

//Intwerface
import { TaskList } from '../../model/task-list'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor() { }


  public setEmitTaskList(event: string) {
    this.taskList.push({task: event, checked: false});
  }

ngDoCheck() {
  this.setLocalStorate();
}
  public deleteItemTaskList(event: number){// deletar apenas um item
    this.taskList.splice(event, 1); //deleta a posição do nó
  }

  public deleteAllTaskList() { //deletar tudo com window.confirm
    const confirm = window.confirm("Você deseja Realmente Limpar suas Tasks?");

    if(confirm){
      this.taskList = [];
    }
  }

  public validationInput(event: string, index: number) {

    if(!event.length) {// verifica se está vazio
      const confirm = window.confirm("Task está vazia deseja deletar?");

      if(confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorate(){
    if(this.taskList){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked)); //valores checados vao para baixo e os não checados vão para cima
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }

}
