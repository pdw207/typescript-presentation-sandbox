"use strict";
console.log('let the games begin!!');
var Monster = /** @class */ (function () {
    function Monster(name, health, strength) {
        this.health = health;
        this.name = name;
        this.strength = strength;
    }
    Monster.prototype.attack = function (defender) {
        var round = Math.round, random = Math.random;
        var loss = round(random() * this.strength);
        console.log(this.name + " attacks " + defender.name + " for " + loss + " points of damage");
        defender.health -= loss;
        console.log(defender.name + " health: " + defender.health);
    };
    return Monster;
}());
var goblin = new Monster('Gerr', 100, 2);
var dragon = new Monster('Toto', 100, 8);
dragon.attack(goblin);
dragon.attack(goblin);
