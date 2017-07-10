import dispatcher from "../dispatcher";


export function DoSomething(data) {
  dispatcher.dispatch({
    type: "UPDATE_PLANT_LIST",
    data
  });
}
