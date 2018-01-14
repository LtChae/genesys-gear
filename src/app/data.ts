import { Quality } from "app/quality";

export class Data {
    static qualities = [
        new Quality("Accurate", null, false, 50),
        new Quality("Disorient", null, false, 50),
        new Quality("Stun", null, false, 50),
        new Quality("Blast", null, false, 25),
        new Quality("Vicious", null, false, 100),
        new Quality("Burn", null, false, 200),
        new Quality("Ensnare", null, false, 200),
        new Quality("Linked", null, false, 200),
        new Quality("Pierce", null, false, 0), //Calculated with damage
        new Quality("Breach", null, false, 2500),
        new Quality("Concussive", null, false, 1000),
        new Quality("Guided", null, false, 250),
        new Quality("Limited Ammo", null, false, -75),
        new Quality("Inaccurate", null, false, -50),
        new Quality("Prepare", null, false, -75),
        new Quality("Slow Firing", null, false, -100),
        new Quality("Unwieldy", null, false, -100),
        new Quality("Cumbersome", null, false, -100),
        new Quality("Reinforced", 1, true, 250),
        new Quality("Superior", 1, true, 100),
        new Quality("Inferior", 1, true, -100)
    ]

    static ranges = [
        {name: "Engaged", cost: 0},
        {name: "Short", cost: 0},
        {name: "Medium", cost: 100},
        {name: "Long", cost: 300},
        {name: "Extreme", cost: 600}
    ]

    static crits = [
        {range: {min:5,max:999}, cost: 0},
        {range: {min:4,max:4}, cost: 50},
        {range: {min:3,max:3}, cost: 150},
        {range: {min:2,max:2}, cost: 300},
        {range: {min:1,max:1}, cost: 600}
    ]

    static damage = [
        {range: {min:0,max:5}, cost: 100},
        {range: {min:6,max:7}, cost: 250},
        {range: {min:8,max:9}, cost: 500},
        {range: {min:10,max:12}, cost: 1000},
        {range: {min:13,max:999}, cost: 3000}
    ]

    static skills = [
        "Melee",
        "Melee [Light]",
        "Melee [Heavy]",
        "Ranged",
        "Ranged [Light]",
        "Ranged [Heavy]",
        "Gunnery"
    ]
}
