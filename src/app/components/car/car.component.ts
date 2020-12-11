import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  name: string;
  speed: number;
  model: string;
  colors: {
    car:string,
    salon:string,
    wheels:string
  };
  options: string[]
  isEdit:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.name = 'audi';
    this.speed = 235;
    this.model = 'rs8';
    this.colors = {
      car: 'white',
      salon: 'black',
      wheels: 'silver'
    };
    this.options = ['abs', 'avtodrive', 'avtoparking']

  }

showEdit() {
  this.isEdit = !this.isEdit;
}

  addOpt(option) {
    this.options.unshift(option);
    return false;
  }
    deleteOpt(option) {
      for(let i=0; i< this.options.length; i++ ){
        if(this.options[i]==option)
        this.options.splice(i,1);
        break;
      }
  }
  carSelect(carName) {
    if (carName == 'bmw') {
      this.name = 'BMW';
      this.speed = 2705;
      this.model = 'm5';
      this.colors = {
        car: 'red',
        salon: 'black',
        wheels: 'silver'
      };
      this.options = ['avtodrive', 'avtoparking']
    
  }
  else if(carName == 'audi') {
  this.name = 'audi';
  this.speed = 111;
  this.model = 'q7';
  this.colors = {
    car: '55',
    salon: 'black',
    wheels: 'silver'
  };
  this.options = ['abs', 'avtodrive', 'avtoparking']
}
else  {
  this.name = 'mer';
  this.speed = 999;
  this.model = 'xxx';
  this.colors = {
    car: '56655',
    salon: 'black',
    wheels: 'silver'
  };
  this.options = ['abs', 'avtoparking']
}
}


// interface Color {
//   car:string,
//   salon:string,
//   wheels:string
// }
}
