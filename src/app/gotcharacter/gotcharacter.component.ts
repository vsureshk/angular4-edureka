import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gotcharacter',
  templateUrl: './gotcharacter.component.html',
  styleUrls: ['./gotcharacter.component.css']
})
export class GOTCharacterComponent implements OnInit {

  GOTCharacter:string[];
  GOTCharacterFirstName:string[] = ['suresh','dinesh','ramesh'];
  GOTCharacterLastName:string[] = ['kumar','ram','kanna'];
  i=0;
  stopSwitch:any;
  stopSwitchStatus=true;
  twoWayData='tyrion';

  @Input() imageUrlChild:string;

  stopSwitchFirstandLast(){
    clearInterval(this.stopSwitch);
    this.stopSwitchStatus=true;
  }

  switchFirstandLastName(){
    this.stopSwitch = setInterval(()=>{
      if(this.i%2==0){
        this.GOTCharacter = this.GOTCharacterFirstName;
        console.log('if');
      }
      else{
        this.GOTCharacter = this.GOTCharacterLastName;
        console.log('else');
      }
      this.i++;
    }, 3000);
    this.stopSwitchStatus=false;
  }


  constructor() {
    this.GOTCharacter = this.GOTCharacterFirstName;
  }

  ngOnInit() {
    console.log(this.imageUrlChild);
  }

}
