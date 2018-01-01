import { Component, OnInit } from '@angular/core';
import { Item } from 'app/item';
import { Quality } from 'app/quality';
import { Data } from 'app/data';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.css']
})
export class WeaponComponent implements OnInit {
  item: Item;
  qualities: Array<Quality>;
  qualityList: Array<Quality>;

  selectedQuality: Quality;

  error: String;

  ranges: any;
  constructor() { }

  ngOnInit() {
    this.item = new Item();
    this.item.name = "Rifle";
    this.item.value = 0;

    this.qualities = new Array();

    this.qualityList = Data.qualities;
    this.ranges = Data.ranges;
  }

  addQuality(quality) {
    if (this.qualities.indexOf(quality) === -1){
      this.qualities.push(quality);
    } else {
      this.error = "Quality already exists";
    }    
  }

  deleteQuality(index) {
    this.qualities.splice(index, 1);
  }

  calculateCost() {
    var totalCost = 0;
    this.qualities.forEach(function(quality) {
      totalCost += quality.cost * quality.value
    });
    this.item.value = totalCost + this.item.getCost();
  }

}
