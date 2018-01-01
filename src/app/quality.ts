export class Quality {
    name: string;
    value: any;
    flag: boolean;
    cost: number;

    constructor(name: string, value: any, flag: boolean, cost = 0) {
        this.name = name;
        this.value = value;
        this.flag = flag;
        this.cost = cost;
    }
}
