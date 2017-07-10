import dispatcher from "../dispatcher";

export function AddPlant(data) {
  dispatcher.dispatch({
    type: "ADD_PLANT",
    data
  });
}

export function UpdatePlant(data) {
  dispatcher.dispatch({
    type: "UPDATE_PLANT",
    data
  });
}

export function DeletePlant(data) {
  dispatcher.dispatch({
    type: "DELETE_PLANT",
    data
  });

  export function DeletePlant(data) {
    dispatcher.dispatch({
      type: "ADD_PLANT_IMAGE",
      data
    });

  export function DeletePlant(data) {
    dispatcher.dispatch({
      type: "ADD_PLANT_TIP",
      data
    });
}
