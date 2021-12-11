//Для оптимизации работы библиотеки было принято решение использовать
//такую структуру данных, как очередь, т.к тогда не придется хранить в
//памяти последнее время использования элемента.

//Также был использован такой тип данных, как коллекция, т.к значения
//ключей в нем хешируется, а, следовательно, сложность поиска элемента
//около О(1)
const Cache = (function () {
  class Cache {
    constructor(maxCount) {
      this.maxCount = maxCount;
      this.cache = new Map(); //инициализация коллекции
    }

    add(key, value) {
      if (this.cache.has(key)) {
        //проверка на наличие элемента с таким ключом в коллекции
        this.cache.delete(key);
        this.cache.set(key, value);
      } else if (this.cache.size < this.maxCount) {
        //ограничение на максимальное количество элементов
        this.cache.set(key, value);
      } else {
        this.cache.delete(this.cache.keys().next().value); //this.cache.keys().next().value позволяет получить ключ первого элемента в коллекции
        this.cache.set(key, value);
      }
    }

    get(key) {
      let value = this.cache.get(key);
      if (this.cache.has(key)) {
        // перемещение в конец очереди, т.к. произошло обращение к элементу
        this.cache.delete(key);
        this.cache.set(key, value);
      } else {
        console.log(`An item with such a key("${key}") is missing`); //сообщение об ошибке
      }
    }

    clean() {
      this.cache.clear(); //очистка кэша
    }

    display() {
      console.log(this.cache); //вывод всего кэша в консоль
    }
  }

  return Cache;
})();
