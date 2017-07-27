import React from "react";
const Settings = require('Settings');
import GridModal from "./gridModal.js";
import GardenStore from '../../../stores/GardenStore';
import PlantStore from '../../../stores/PlantStore';

export default class SubGrid extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.refreshGarden = this.refreshGarden.bind(this);

    this.state = {
      plot: {},
      plant: {},
      bed_id: this.props.bed_id,
      plot_id: this.props.plot_id,
      showModal: false
    }
  }

  componentWillMount() {
    GardenStore.on("plants_plots_loaded", this.refreshGarden);
  }

  componentWillUnmount() {
    GardenStore.removeListener("plants_plots_loaded", this.refreshGarden);
  }

  refreshGarden() {
    let singlePlot = GardenStore.getSinglePlot(this.state.bed_id, this. state.plot_id);
    if (singlePlot) {
      this.setState({
        plot: singlePlot,
        plant: PlantStore.getPlantById(singlePlot.plant_id)
      })
    }
  }

  openModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  generateRow(area, xVal, yVal) {
    return (
      <g>
        <rect class="subcell" x={xVal} y={yVal} width={100/area} height={100/area}/>
        <image onClick={this.openModal.bind(this)} href={Settings.assetServer + this.state.plant.plant_icon} x={xVal} y={yVal} width={100/area} height={100/area}/>
      </g>
    )
  }

  generateColumn(area, xVal) {
    let rowArr = [];
    for (var i = 0; i < area; i++) {
      rowArr.push(this.generateRow(area, xVal, this.props.yVal + (100/area)*i));
    }
    return rowArr
  }

  generateGrid() {
    if (this.state.plant) {
      let area = this.state.plant.area;
      let columnArr = [];
      for (var i = 0; i < area; i++) {
        columnArr.push(this.generateColumn(area, this.props.xVal + (100/area)*i));
      }
      return columnArr;
    }
    // set up else to display an empty plot if there is no data
  }

  render() {
    // if plant is null display something else

    return (
      <g>
        {this.generateGrid()}
        {
          this.state.plant &&
          <div>
            <GridModal showModal={this.state.showModal}
              close={this.closeModal}
              plant={this.state.plant}
              plot={this.state.plot}
              />
          </div>
        }
      </g>
    )
  }
}
