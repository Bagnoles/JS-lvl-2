"use strict";

class Burger {
    constructor (size, filling) {
        this.size = size;
        this.filling = filling;
        this.toppings = [];
    }
    addTopping(topping) {  
        this.toppings.push(topping);
    }  
    removeTopping(topping) { 
        delete this.toppings[this.toppings.indexOf(topping)];
    }
    calculatePrice() { 
        this.price = this.size.price + this.filling.price;
        for(let value of this.toppings) {
            if (value == "spice") {
                this.price += 15;
            }
            if (value == "mayonnaise") {
                this.price += 20;
            }
        }
        return this.price;
    }
    calculateCalories() { 
        this.ccal = this.size.calories + this.filling.calories;
        for(let value of this.toppings) {
            if (value == "mayonnaise") {
                this.ccal += 5;
            }
        }
        return this.ccal;
    }
}

let burger = new Burger("small", "cheese");
let result = document.querySelector('.result');
let orderBtn = document.querySelector('.order-btn');
let resetBtn = document.querySelector('.reset-btn');
let inputsSize = document.querySelectorAll('input[name="size"]');
let inputsFilling = document.querySelectorAll('input[name="filling"]');
let inputsTopping = document.querySelectorAll('input[type="checkbox"]');

inputsSize.forEach( input => {
    input.addEventListener('change', event => {
        if (event.target.value == "small") {
            burger.size = {name: "small", calories: 20, price: 50};
        }
        if (event.target.value == "big") {
            burger.size = {name: "big", calories: 40, price: 100};
        }
    });
});

inputsFilling.forEach( input => {
    input.addEventListener('change', event => {
        if (event.target.value == "cheese") {
            burger.filling = {name: "cheese", calories: 20, price: 10};
        }
        if (event.target.value == "salad") {
            burger.filling = {name: "salad", calories: 5, price: 20};
        }
        if (event.target.value == "potato") {
            burger.filling = {name: "potato", calories: 10, price: 15};
        }
    });
});

inputsTopping.forEach( input => {
    input.addEventListener('change', event => {
        if (input.checked) {
            burger.addTopping(event.target.value);
        } else {
            burger.removeTopping(event.target.value);
        }
    });
});

orderBtn.addEventListener('click', (event) => {
    event.preventDefault();
    result.innerHTML = `Калорийность: ${burger.calculateCalories()}, цена: ${burger.calculatePrice()}`;
});

resetBtn.addEventListener('click', () => {
    burger.price = 0;
    burger.calories = 0;
    result.innerHTML = "";
});

