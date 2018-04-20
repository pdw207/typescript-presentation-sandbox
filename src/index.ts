console.log('let the games begin!!');

class Monster {
  public health: number;
  public name: string;
  private strength: number;
  constructor(name: string, health: number, strength: number) {
    this.health = health;
    this.name = name;
    this.strength = strength;
  }
  public attack(defender: Monster) {
    const { round, random } = Math;
    const loss = round(random() * this.strength);
    console.log(`${this.name} attacks ${defender.name} for ${loss} points of damage`);
    defender.health -= loss;
    console.log(`${defender.name} health: ${defender.health}`);
  }
}


const goblin  = new Monster('Gerr', 100, 2);
const dragon  = new Monster('Toto', 100, 8);
dragon.attack(goblin)
dragon.attack(goblin)
