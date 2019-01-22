import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {
  dcHeroes:string[] = ['Batman','Wonder Woman','Flash','Superman'];
  index:number=0;
  toggleHeroFlag:boolean=true;
  selectedHero:string;
  myStyle:{};
  color:string;
  setToggleFlag:boolean=true;

  setStyle(){
    this.myStyle = {
      'font-weight': this.setToggleFlag ? 'bold' : 'normal',
      'font-size': this.setToggleFlag ? '24px' : '15px',
      'color': this.generateRandomColor()
    }
    this.setToggleFlag = !this.setToggleFlag;
  }

  generateRandomColor(){
    //#ffffff
    this.color = '#';
    var letters = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    for(var i=0;i<6;i++){
      this.color += letters[Math.floor(Math.random()*16)];
    }
    console.log(this.color);
    return this.color;
  }

  toggleHero(){
    this.toggleHeroFlag = !this.toggleHeroFlag;
  }

  selectHero(hero){
    this.selectedHero = hero;
    console.log(hero);
  }

  constructor() { }

  ngOnInit() {
  }

}
