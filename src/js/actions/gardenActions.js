import dispatcher from "../dispatcher";
import * as Helpers from "../helpers";

export function UpdatePlotPlant(data) {
  // Data: bed_id, plot_bed_id, plant_id
  Helpers.restCall(
    'plots_plants',
    'UPDATE',
    data
  )
}

export function AddPlotNote(data) {
  // Data: bed_id, plot_id, notes
  Helpers.restCall(
    'notes',
    'POST',
    data
  )
}

export function AddPlotImage(data) {
  // Data: bed_id, plot_id, plant_id, image_url, image_description
  Helpers.restCall(
    'images',
    'POST',
    data
  )
}
