import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class PlantStore extends EventEmitter {
  constructor() {
    super();
    this.plants = {
      plantList: []
    };
  }

  getPlants() {

  }

  handleActions(action) {
    switch(action.type) {
      case "UPDATE_PLANT_LIST": {
        this.error = {};
        this.emit("update_plants_start");
        break;
      }
    }
  }
}

const plantStore = new plantStore();
dispatcher.register(plantStore.handleActions.bind(plantStore));
export default plantStore;
