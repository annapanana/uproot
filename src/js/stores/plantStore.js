import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class PlantStore extends EventEmitter {
  constructor() {
    super();
    this.plants = [
      {
        id: 0,
        name: "broccoli",
        image: `broccoli_icon.svg`,
        area: 1,
        family: "Brassicaceae (also called Cruciferae)",
        days_to_harvest: "50 to 70 days from transplant.",
        planting_information: "Transplant into garden when seedlings have two sets of leaves. Frost-hardy. Plant a second broccoli crop eight weeks before first fall frost.",
        harvest_information: "",
        notes: "notes about broccoli"
      },
      {
        id: 1,
        name: "corn",
        image: "corn_icon.svg",
        area: 1,
        family: "Crambidae",
        days_to_harvest: "65 to 75 from planting. Not frost-hardy.",
        planting_information: "Plant after frost, when soil reaches 60 degrees F. Not frost-hardy",
        harvest_information: "",
        notes: "notes about corn"
      },
      {
        id: 2,
        name: "peas",
        image: "peas_icon.svg",
        area: 3,
        family: "Legumes",
        days_to_harvest: "50 to 60 days from planting seeds",
        planting_information: "Plant outdoors 1″ deep as soon as soil can be worked. For a fall crop, plant again six to eight weeks before frost. Very frost-hardy.",
        harvest_information: "",
        notes: "notes about peas"
      },
      {
        id: 3,
        name: "tomato",
        image: "tomato_icon.svg",
        area: 1,
        family: "Nightshade",
        days_to_harvest: "55 to 100 days from transplanting, depending on variety.",
        planting_information: "Plant seeds 1/4″ deep indoors, six to eight weeks before last frost. Transplant into garden one to two weeks after last frost or when soil reaches 65 degrees F. Grow early season crops nearby to allow more room later. Not frost-hardy. Remove lower leaves before planting and bury extra stem.",
        harvest_information: "",
        notes: "notes about tomatos"
      },
      {
        id: 4,
        name: "lettuce",
        image: "lettuce_icon.svg",
        area: 2,
        family: "Asteraceae",
        days_to_harvest: "50 days to full size. Edible anytime.",
        planting_information: "Sow seed indoors 1/4″ deep, eight weeks before last frost or in garden when soil is 50 degrees F. Transplant seedlings when four weeks old. Plant more lettuce seeds every two to four weeks for a continuous supply. Frost-hardy.",
        harvest_information: "Start with five seedlings, eat four as they grow and let one head mature to full size.",
        notes: "notes about lettuce"
      }
    ]
  }

  getPlants() {
    return this.plants;
  }

  getPlantTips(plant_id) {

  }

  getPlantImages(plant_id) {
    
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

const plantStore = new PlantStore();
dispatcher.register(plantStore.handleActions.bind(plantStore));
export default plantStore;
