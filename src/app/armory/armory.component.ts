import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'app/item';

@Component({
  selector: 'app-armory',
  templateUrl: './armory.component.html',
  styleUrls: ['./armory.component.css']
})
export class ArmoryComponent implements OnInit {

  @Input() newWeapon: Item;
  weapons: Array<Item>;

  constructor() { }

  ngOnInit() {
    this.newWeapon = new Item();
    this.weapons = new Array<Item>();
  }

  addWeapon() {
    let tempWeapon = Object.assign(this.newWeapon);
    this.weapons.push(tempWeapon);
    this.newWeapon = new Item();
    this.sortWeapons();
  }

  createWeapon() {
    this.newWeapon = new Item();
  }

  sortWeapons() {
    this.weapons = this.weapons.sort(function(a, b) {
      if (a.value > b.value){
        return 1;
      }
      if (a.value < b.value){
        return -1;
      }
    
      // names must be equal
      return 0;
    });
  }

  editWeapon(weapon: Item){
    this.newWeapon = weapon;
  }

}
