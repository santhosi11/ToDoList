import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos!: Todo[];
  inputToDo:string=''
  constructor() { }

  ngOnInit(): void {
    this.todos=[]
  }

  toggleDone(id: number)
  {
    this.todos.map((v,i)=>{
      if(i==id)
        v.completed=!v.completed;
      return v;
    })
  }

  deleteToDo(id:number)
  {
    this.todos=this.todos.filter((v,i)=>i!==id);
  }

  addToDo()
  {
    this.todos.push(
      {
        content:this.inputToDo,
        completed:false
      }
    );
    this.inputToDo=""
  }

}
