// Для атаки и лечения определены отдельные контракты
/** @typedef {{ attack: () => number }} Attacker */
/** @typedef {{ heal: () => number }} Healer */

/** @implements {Attacker} */
class Warrior {
  attack() {
    return 20;
  }
}

/** @implements {Healer} */
class Priest {
  heal() {
    return 15;
  }
}

/** @param {Attacker} attacker */
function performAttack(attacker) {
  return attacker.attack();
}

/** @param {Healer} healer */
function performHealing(healer) {
  return healer.heal();
}

console.log('\nI: Разделение интерфейсов');
console.log(`Урон воина: ${performAttack(new Warrior())}`);
console.log(`Лечение жреца: ${performHealing(new Priest())}`);
