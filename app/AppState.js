import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Snack from "./Models/Snack.js"

//NOTE The goal of the store/state is to hold all the data for the entire application.
// The store also holds all of the models based on the data provided.

//The state holda all the data (THIS IS PRIVATE)
//Do not want the data to be able to be manipulated without coming through the store/state.

class AppState extends EventEmitter {
  /** @type {Value[]} */
  Value = []
  /** @type {Snack} */
  snacks = new Snack("Chips", 1)
  money = 0
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
