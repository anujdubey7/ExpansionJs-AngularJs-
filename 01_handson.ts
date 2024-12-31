
//INTERFACE
interface Vehicle{
    color: string;
    model: string;
    startengine(): void
}

//Classes

class Car implements Vehicle{
    color: string
    model: string 
    constructor(color: string, model: string){
        this.color =  color;
        this.model = model;
    }
    startengine(){
        console.log(`${this.model} engine started`);
    }
}

const maruti = new Car("White", "Suzuki")

maruti.startengine();












export{}