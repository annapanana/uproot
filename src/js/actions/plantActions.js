import * as Helpers from "../helpers";

export function addPlant(data) {
  // Data: area, days_to_harvest, family, harvest_info, notes, plant_image_url, plant_name, planting_info
  Helpers.restCall(
    'plants',
    'POST',
    data,
    'PLANT_SERVICE_START',
    'PLANT_ADDED',
    'ERROR_MSG'
  )
}

export function updatePlant(data) {
  // Data: area, days_to_harvest, family, harvest_info, notes, plant_image_url, plant_name, planting_info
  Helpers.restCall(
    'plants',
    'PATCH',
    data,
    'PLANT_SERVICE_START',
    'PLANT_UPDATED',
    'ERROR_MSG'
  )
}

export function deletePlant(data) {
  // Data: plant_id
  Helpers.restCall(
    'plants',
    'PATCH',
    data,
    'PLANT_SERVICE_START',
    'PLANT_DELETED',
    'ERROR_MSG'
  )
}

export function addPlantImage(data) {
  // Data: bed_id, plant_id, image_url, image_description
  Helpers.restCall(
    'images',
    'POST',
    data,
    'PLANT_SERVICE_START',
    'PLANT_IMAGE_ADDED',
    'ERROR_MSG'
  )
}

export function addPlantTip(data) {
  // Data: plant_id, tip
  Helpers.restCall(
    'tips',
    'POST',
    data,
    'PLANT_SERVICE_START',
    'PLANT_TIP_ADDED',
    'ERROR_MSG'
  )
}
