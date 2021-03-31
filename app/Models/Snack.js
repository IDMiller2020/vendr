//NOTE An object that holds all the information for the data needed per object.
//This is a single snack, it will be the state/stores responsibility to hold the entire collection.

export default class Snack{
  constructor(name, price) {
    this.name = name;
    this.price = price
  }
}