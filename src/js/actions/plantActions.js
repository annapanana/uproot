import dispatcher from "../dispatcher";
import * as Helpers from "../helpers";

export function AddPlant(data) {
  // Data: area, days_to_harvest, family, harvest_info, notes, plant_image_url, plant_name, planting_info
  Helpers.restCall(
    'plants',
    'POST',
    data
  )
}

export function UpdatePlant(data) {
  // Data: area, days_to_harvest, family, harvest_info, notes, plant_image_url, plant_name, planting_info
  Helpers.restCall(
    'plants',
    'PATCH',
    data
  )
}

export function DeletePlant(data) {
  // Data: plant_id
  Helpers.restCall(
    'plants',
    'PATCH',
    data
  )
}

export function AddPlantImage(data) {

}

export function AddPlantTip(data) {

}
