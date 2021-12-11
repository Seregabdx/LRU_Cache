"use strict";

let cache = new Cache(4); //4 в данном случае это размер кэша

cache.add("a", 1);
cache.display();

cache.add("b", 2);
cache.display();

cache.add("c", 3);
cache.display();

cache.add("d", 4);
cache.display();

cache.add("e", 5);
cache.display();

cache.add("f", 6);
cache.display();

cache.get("c");
cache.display();

cache.add("a", 6);
cache.display();

cache.get("b");

cache.clean();

cache.display();

cache.add("a", 1);
cache.display();
