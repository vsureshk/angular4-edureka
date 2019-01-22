import { Component } from '@angular/core';

@Component({
    selector: "app-first",
    templateUrl: 'first.component.html',
    styleUrls: ['first.component.css']
})

export class FirstComponent{
  headingTwo:string='I love component';
  imageUrl:string='../../assets/download.png';
  returnString(){
    return 'I love interpolation';
  }

  changeValue(){
    this.headingTwo = 'This value has been changed';
  }
}
