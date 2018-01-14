import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'app/item';
import { Quality } from 'app/quality';
import { Data } from 'app/data';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.css']
})
export class WeaponComponent implements OnInit {
  @Input() item: Item;
  qualities: Array<Quality>;
  qualityList: Array<Quality>;

  selectedQuality: Quality;

  error: String;

  ranges: any;
  skills: any;
  constructor() { }

  ngOnInit() {
    if (!this.item) {
      this.item = new Item();
      this.item.name = "Rifle";
      this.item.value = 0;
    }

    this.item.qualities = new Array();

    this.qualityList = Data.qualities;
    this.ranges = Data.ranges;
    this.skills = Data.skills;
  }

}
