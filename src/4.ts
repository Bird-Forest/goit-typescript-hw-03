class Key {
    private signature: number;
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(private key: Key) { }
    getKey() {
    return this.key;
    }
}
abstract class House {
    door: boolean;
    key: Key;
    tenants: Person[];
    
    comeIn(person: Person) {
        if (this.door)  
            this.tenants.push(person); 
    }
    abstract openDoor(key: Key): boolean;
}
class MyHouse extends House {
    constructor(key: Key) {
        super();
    }
    openDoor(key: Key) {
        if (this.key.getSignature() === key.getSignature()) return this.door = true;
        else  return this.door = false;   
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};