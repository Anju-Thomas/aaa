import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  newTask:string;
  todos[];


  constructor() {
    this.newTask=() 
  
  }

  ngOnInit(): void {
    addTodo(){
      var newTask=document.getElementById("newTask").value
      todos.push(newTask)
      console.log(todos)
  
      

    }
    
  
  }
  
  }

}
