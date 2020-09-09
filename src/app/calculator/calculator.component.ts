import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  value1:string;
  value2:string;
  result:number=0

  constructor() { }

  ngOnInit(): void {
  }
  add(event){
    console.log("function called......",event)
    this.result=parseInt(this.value1)+parseInt(this.value2)
  }
  test(e){
  console.log(e)

}
}