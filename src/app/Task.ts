export class Task {
    
    constructor (public name: string,public qty : number,public price:number) {}
    toString () {
        return `${this.name}    ${this.qty}    ${this.price}`
    }
    subTotal(){
       return this.qty*this.price
    }
    getName(){
        return this.name;
    }
     getQty(){
        return this.qty;
    }
    getPrice(){
        return this.price;
    }
}