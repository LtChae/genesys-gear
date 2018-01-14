import { Data } from 'app/data';
import { Quality } from 'app/quality';

export class Item {
    name: string;
    value: number;
    damage: string;
    crit: number;
    range: string;
    melee: boolean;
    qualities: Array<Quality>;
    skill: string;
    rarity: number;
    encum: number;

    constructor() {
        this.qualities = new Array<Quality>();
    }

    calcValue() {
        var value = 0;
        value += this.getCritCost();
        value += this.getRangeCost();
        value += this.getDamageCost();
        if (this.qualities) {
            this.qualities.forEach(function(quality) {
                value += quality.cost * quality.value
            });
        }
        if (this.skill.includes("Melee")){
            value = value / 2;
        }
        this.value = value;
    }

    getCritCost(){
        if (!this.crit){
            return 0;
        }
        var crit = this.crit;
        return Data.crits.find(function(critLevel){
            return (crit >= critLevel.range.min && crit <= critLevel.range.max);
        }).cost;
    }

    getRangeCost(){
        if (!this.range){
            return 0;
        }
        var range = this.range;
        return Data.ranges.find(function(element){
            return (element.name == range);
        }).cost;
    }

    getDamageCost(){
        if (!this.damage){
            return 0;
        }
        let damageValue: number = 0;
        if (this.damage.includes("+")) {
            damageValue = parseInt(this.damage) * 2;
        } else {
            damageValue = parseInt(this.damage);
        }
        let pierceQuality = this.qualities.find(function(quality){return quality.name == "Pierce"});
        if (pierceQuality && pierceQuality.value){
            console.log(pierceQuality.value);
            damageValue += parseInt(pierceQuality.value);
            console.log(damageValue);
        }
        return Data.damage.find(function(element){
            return (damageValue >= element.range.min && damageValue <= element.range.max);
        }).cost;
    }

    addQuality(quality) {
        if (quality) {
            if (this.qualities.indexOf(quality) === -1){
                this.qualities.push(quality);
                this.calcValue();
            } else {
                //TODO: error handling
            } 
        }   
    }

    deleteQuality(index) {
        this.qualities.splice(index, 1);
        this.calcValue();
    }
}
