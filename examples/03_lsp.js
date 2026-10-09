class Enemy {
  // Контракт: неотрицательное целое количество золота
  getReward() {
    return 10;
  }
}

class BossEnemy extends Enemy {
  // Наследник сохраняет контракт базового метода
  getReward() {
    return 50;
  }
}

/**
 * @param {{ gold: number }} player
 * @param {Enemy} enemy
 */
function addReward(player, enemy) {
  player.gold += enemy.getReward();
}

console.log('\nL: Подстановка Барбары Лисков');
const player = { gold: 0 };
const enemies = [new Enemy(), new BossEnemy()];

// Один клиентский код работает с обоими типами
for (const enemy of enemies) {
  addReward(player, enemy);
  console.log(`Золото персонажа: ${player.gold}`);
}
