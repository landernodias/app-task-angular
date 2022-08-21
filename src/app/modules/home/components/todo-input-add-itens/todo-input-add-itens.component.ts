import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList() {
    this.addItemTaskList = this.addItemTaskList.trim(); //remove espaços em branco

    if(this.addItemTaskList){ //verifica se algo foi adcionado
      this.emitItemTaskList.emit(this.addItemTaskList); //sempre que ocorrer um evento adicione o valor no addItemTaskList
      //dessa maneira é possivel recuperar no outro componente de lista
      this.addItemTaskList = ""; //quando apertar o enter ele fica vazio
    }
  }

}
