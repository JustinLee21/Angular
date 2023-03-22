import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber:number = 0; 
  private value: number = 0; 
  private totalValues: number[] = []; 
  interval!: NodeJS.Timer; 

  constructor(){}

  public incrementValue(){
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1); 
      this.lastNumber++; 
    }, 1000); 
   
    this.value +=1; 
  }

  public stopCounting(){
    clearInterval(this.interval); 
    this.totalValues.push(this.value); 
    this.setValue(); 
  }

  public getValue(){
    return this.value; 
  }

  private setValue (){
    this.value = 0; 
  }

  public getTotalValues(){
    return this.totalValues; 
  }

  public validateOddOrEven(value: number){
    return value % 2 === 0 ? "even" : "odd"; 
  }


}
