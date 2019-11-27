const weArePoor = false
const luxuryFeeder = new LuxuryFeeder()
const cheapFeeder = new CheapFeeder()
let relevantFeeder
weArePoor ? relevantFeeder = cheapFeeder : relevantFeeder = luxuryFeeder


class Animal{
    constructor(name,type,feeder){
        this.name = name
        this.type = type
        this.feeder = feeder
    }
    getFood(weArePoor){
    }
}