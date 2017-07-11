import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class PlantStore extends EventEmitter {
  constructor() {
    super();
    this.plants = [];
    this.plantImages = [];
    this.plantTips = [];
  }

  getPlants() {
    return this.plants;
  }

  getPlantImages(plant_id) {
    return this.plantImages;
  }

  getPlantTips(plant_id) {
    return this.plantTips;
  }

  handleActions(action) {
    switch(action.type) {
      case "PLANT_SERVICE_START": {
        this.error = {};
        this.emit("plant_service_start");
        break;
      }
      case "PLANT_ADDED": {
        this.error = {};
        this.plants = action.data;
        this.emit("plant_added");
        break;
      }
      case "PLANT_UPDATED": {
        this.error = {};
        this.plants = action.data;
        this.emit("plant_updated");
        break;
      }
      case "PLANT_DELETED": {
        this.error = {};
        this.plants = action.data;
        this.emit("plant_deleted");
        break;
      }
      case "PLANT_IMAGE_ADDED": {
        this.error = {};
        this.plantImages = action.data;
        this.emit("plant_image_added");
        break;
      }
      case "PLANT_TIP_ADDED": {
        this.error = {};
        this.plantTips = action.data;
        this.emit("plant_tip_added");
        break;
      }
      case "PLANT_SERVICE_ERROR": {
        {xhr: action.xhr, textStatus: action.textStatus, errorThrown: action.errorThrown};
        this.emit("plant_serice_error");
        break;
      }
    }
  }
}

const plantStore = new PlantStore();
dispatcher.register(plantStore.handleActions.bind(plantStore));
export default plantStore;
