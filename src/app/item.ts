import { Data } from 'app/data';

export class Item {
    name: string;
    value: number;
    damage: number;
    crit: number;
    range: string;
    melee: boolean;

    getCost() {
        var cost = 0;
        cost += this.getCritCost();
        cost += this.getRangeCost();
        cost += this.getDamageCost();
        return cost;
    }

    getCritCost(){
        var crit = this.crit;
        return Data.crits.find(function(critLevel){
            return (crit >= critLevel.range.min && crit <= critLevel.range.max);
        }).cost;
    }

    getRangeCost(){
        var range = this.range;
        return Data.ranges.find(function(element){
            return (element.name == range);
        }).cost;
    }

    getDamageCost(){
        var damage = this.damage;
        return Data.damage.find(function(element){
            return (damage >= element.range.min && damage <= element.range.max);
        }).cost;
    }
}
