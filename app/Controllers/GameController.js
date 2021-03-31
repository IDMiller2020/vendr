//NOTE The controller takes user input and calls to the servie the attempt change data
import GameService from '../Services/GameService.js'
import { ProxyState } from "../AppState.js"

function _draw() {
  document.getElementById('credit').innerHTML = `
    <p>Current Credit: $${ProxyState.money}</p>
  `
}

export default class GameController {
  constructor() {
    _draw()
    ProxyState.on("money", _draw)
    console.log('Building Controller')
  }
  addMoney() {
    console.log('Adding Money')
    GameService.addMoney()
  }
}