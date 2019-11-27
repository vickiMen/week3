class Animal{
    constructor(name, isParaplegic){
        this.name = name,
        this.isParaplegic = isParaplegic,
        this.children = []
    }
    giveBirth(){
        this.children = this.name
    }
}

// const dog = new Animal('lucky',false)


class Human{
    constructor(name,age,isFriendly){
        this.name = name
        this.age = age
        this.isFriendly = isFriendly
    }
}

const person = new Human('Vicki',28,true)

const dog = new Animal('lucky')
dog.giveBirth()

class Vehicle{
    constructor(x,y,speed,fuel){
        this.x = x
        this.y = y
        this.speed = speed
        Vehicle.carsSold++;
        this._fuel = fuel
    }
    getInfo(){
        console.log("We've sold " + Vehicle.carsSold + " vehicles.")
    }
    calculateMoney(){
        console.log('Made ' + Vehicle.carsSold * 30000 + ' today')
    }
    set fuel(fuel){
        if (fuel < 0 || fuel > 150){
            return console.log("fuel must be positive")
        }
        this._fuel = fuel
    }
    get fuel(){
        return this.fuel
    }
}

Vehicle.carsSold = 0;

const mazda = new Vehicle('bla','bla',200)
mazda.getInfo()
mazda.calculateMoney()