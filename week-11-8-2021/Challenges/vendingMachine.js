
/// VENDING MACHINE

const coins = [500, 200, 100, 50, 20, 10];

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

const productsList1 = {
    "7" : new Product("Crackers", 120),
    "1" : new Product("Soda", 200),
    "5" : new Product("Sandwich", 340)
};


class VendingMachine{

    constructor(products){
        this.products = products; // set 'unique catalog' per vending machine
    }

    buy(prodKey, payment){

        let prod;
        let change;

        if(prodKey in this.products){

            prod = this.products[prodKey];

            if(payment > prod.price){
                change = this.calcChange(prod.price, payment);
                return {"product":prod.name, "change":change};

            }else if (payment == prod.price){
                change = 0;
                return {"product":prod.name, "change":change};

            }else{
                return "Not enough money for this product";
            }
        }else{
            return "Enter a valid product number";
        }
    }

    calcChange(price, payment){

        let raw_remaining = payment - price;
        console.log("Product dispensed below. Amount owed as change: " + raw_remaining);
        let change = [];

        for(let i = 0; i < coins.length; i++){
            while(raw_remaining >= coins[i]){
                change.push(coins[i]);
                raw_remaining -= coins[i];
            }
        }

        return change;
    }
}

function testMachine(){

    let machine = new VendingMachine(productsList1);

    console.log("");
    console.log("Trying to buy prod 7 for 200");
    console.log(machine.buy(7, 200));

    console.log("");
    console.log("Trying to buy prod 0 for 500");
    console.log(machine.buy(0, 500));

    console.log("");
    console.log("Trying to buy prod 1 for 90");
    console.log(machine.buy(1, 90));

    console.log("");
    console.log("Trying to buy prod 7 for 500");
    console.log(machine.buy(7,500));
}

module.exports = {testMachine};
