import dispatcher from "../dispatcher";

export function UpdatePlot(data) {
  dispatcher.dispatch({
    type: "UPDATE_PLANT_IN_PLOT",
    data
  });

  dispatcher.dispatch({
    type: "ADD_PLOT_NOTE",
    data
  });

  dispatcher.dispatch({
    type: "ADD_PLOT_IMAGE",
    data
  });

}
