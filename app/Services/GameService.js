//NOTE Gets information/requests from the controller applies all business logic and based on that returns certain data from the store.

import { ProxyState } from "../AppState.js";
import Snack from "../Models/Snack.js";

class GameService {
  constructor() {
    console.log(('Creating Service'));
  }
  addMoney() {
    console.log('Adding money from the Service')
    ProxyState.money += 0.25
  }
}

const service = new GameService()
export default service