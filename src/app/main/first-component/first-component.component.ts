import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
   
  constructor() { }
 numArra=[];
 showResult:boolean;
 finalResult:any;
 firstNum:any;
 secondnum:any;
 currentOperator:any;
 showZero:boolean;
 
  ngOnInit() {
    this.showResult= false;
    this.showZero = true
  }
  clear(){
    this.numArra =[];
  this.showZero = true;
  this.showResult= false;
  this.currentOperator = '';
  this.firstNum ='';
  this.secondnum='';
  this.finalResult = '';
  }
  clickParam(num){
    this.showZero = false
   console.log(typeof(num),'ss');
   if(typeof(num) === 'number'){
    this.numArra.push(num);
   }
  
   this.firstNum = (this.numArra[0]);
   if(this.numArra.length ===2){
    // this.getOperator(this.numArra);
   
   }

   if(num === 'multiply'){
 this.currentOperator = 'x';
  }
  else if(num === 'sub'){
    this.currentOperator = '-';
  }
  else if(num === 'add'){
    this.currentOperator = '+';
  }
  else if(num === 'divide'){
    this.currentOperator = '%';
  }
  this.secondnum = (this.numArra[1]);


  }

  showresult(){
    console.log('in show');
   
    this.showResult = true;
    console.log(this.currentOperator,'kkkk')
    if(this.currentOperator === 'x'){
      let res =  (this.firstNum * this.secondnum);
      this.finalResult = res;
    }
    else if(this.currentOperator === '-'){
      let res =  (this.firstNum - this.secondnum);
      this.finalResult = res;
    }
    else if(this.currentOperator === '+'){
      let res =  (this.firstNum + this.secondnum);
      this.finalResult = res;
    }
    else if(this.currentOperator === '%'){
      let res =  (this.firstNum % this.secondnum);
      this.finalResult = res;
    }
 
  }

}


