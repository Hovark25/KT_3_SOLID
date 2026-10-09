/** @typedef {{ calculate: (damage: number) => number }} DamageRule */

/** @implements {DamageRule} */
class NormalDamage {
  calculate(damage) {
    return damage;
  }
}

// Новое правило добавляется отдельным классом
/** @implements {DamageRule} */
class CriticalDamage {
  calculate(damage) {
    return damage * 2;
  }
}

class DamageCalculator {
  /** @param {DamageRule} rule */
  constructor(rule) {
    this.rule = rule;
  }

  // Для нового правила этот метод менять не нужно
  calculate(damage) {
    return this.rule.calculate(damage);
  }
}

console.log('\nO: Открытость и закрытость');
const normal = new DamageCalculator(new NormalDamage());
const critical = new DamageCalculator(new CriticalDamage());
console.log(`Обычная атака: ${normal.calculate(20)}`);
console.log(`Критическая атака: ${critical.calculate(20)}`);
