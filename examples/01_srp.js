// Состояние персонажа и правила получения урона
class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }

  takeDamage(amount) {
    if (!Number.isFinite(amount) || amount < 0) {
      throw new Error('Урон должен быть неотрицательным числом');
    }
    this.health = Math.max(0, this.health - amount);
  }
}

// Формирование текста вынесено в отдельный класс
class CharacterReporter {
  format(character) {
    return `${character.name}: здоровье ${character.health}`;
  }
}

console.log('\nS: Единственная ответственность');
const warrior = new Character('Воин');
warrior.takeDamage(30);
const reporter = new CharacterReporter();
console.log(reporter.format(warrior));
