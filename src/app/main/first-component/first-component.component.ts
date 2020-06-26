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
  ngOnInit() {
    this.showResult= false;
    this.finalResult = 0;
  }
  clickParam(num){
   console.log(num,'ss');
   this.numArra.push(num);
   if(this.numArra.length ===2){
    // this.getOperator(this.numArra);
   
   }
  }

  showresult(){
    console.log('in show')
    this.showResult = true;
  }

  getOperator(val){
   if(val === 'multiply'){
     var numbers =this.numArra;

  this.firstNum = parseInt(numbers[0]);
  this.secondnum = parseInt(numbers[1]);
  this.currentOperator = 'x'
  let res =  (this.firstNum * this.secondnum);
  this.finalResult = res;
   // let res = parseInt(numbers[0])* parseInt(numbers[1]);

    // if (this.showResult === true){
    //   console.log('show resultttt')
    //   this.finalResult = res;
    //   console.log(res,'ressss');
    // }
    // else{
    //   this.finalResult = '0';
    // }
 
   }
  else if(val === 'sub'){
    let res = val[0]-val[1]
  }
  else if(val === 'add'){
    let res = val[0]+val[1]
  }
  else if(val === 'divide'){
    let res = val[0]%val[1]
  }
  }

}
