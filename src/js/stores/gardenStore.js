import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class GardenStore extends EventEmitter {
  constructor() {
    super();
    this.plants_plots = [
      {
        plant_id: 0,
        plot_id: "100_01_01"
      },
      {
        plant_id: 0,
        plot_id: "100_01_01"
      },
      {
        plant_id: 0,
        plot_id: "100_01_01"
      },
      {
        plant_id: 0,
        plot_id: "100_01_01"
      },
      {
        plant_id: 0,
        plot_id: "100_01_01"
      }
    ]
  }

  getAllPlotsPlantData() {
    // TODO, get plant data from DB and build object with full plant data from the plants plots join table. Return that
    return this.plants_plots;
  }

  getPlantInPlot(plot_id) {
    return "nothing yet!";
  }

  getPlotData(plot_id) {

  }

  getBedData(bed_id) {

  }

  getPlotImages(plot_id) {

  }

  getBedImages(bed_id) {

  }

  handleActions(action) {
    switch(action.type) {
      case "UPDATE_PLANT_IN_PLOT": {
        this.error = {};
        this.emit("update_plant_in_plot");
        break;
      }
    }
    switch(action.type) {
      case "ADD_PLOT_NOTE": {
        this.error = {};
        this.emit("add_plot_note");
        break;
      }
    }
    switch(action.type) {
      case "ADD_PLOT_IMAGE": {
        this.error = {};
        this.emit("add_plot_image");
        break;
      }
    }
  }
}

const gardenStore = new GardenStore();
dispatcher.register(gardenStore.handleActions.bind(gardenStore));
export default gardenStore;
