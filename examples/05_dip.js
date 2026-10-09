/** @typedef {{ send: (message: string) => void }} Notifier */

class QuestService {
  // Зависимость передаётся через конструктор
  /** @param {Notifier} notifier */
  constructor(notifier) {
    this.notifier = notifier;
  }

  complete(questName) {
    this.notifier.send(`Задание выполнено: ${questName}`);
  }
}

/** @implements {Notifier} */
class ConsoleNotifier {
  send(message) {
    console.log(message);
  }
}

/** @implements {Notifier} */
class MemoryNotifier {
  constructor() {
    this.messages = [];
  }

  send(message) {
    this.messages.push(message);
  }
}

console.log('\nD: Инверсия зависимостей');
const consoleService = new QuestService(new ConsoleNotifier());
consoleService.complete('Поиск артефакта');

const memory = new MemoryNotifier();
const memoryService = new QuestService(memory);
memoryService.complete('Защита деревни');
console.log(`Сохранённое уведомление: ${memory.messages[0]}`);
