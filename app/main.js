//NOTE This file spins up an app and loads all the controllers.

import GameController from "./Controllers/GameController.js";

class App {
  gameController = new GameController()
}

window["app"] = new App();
