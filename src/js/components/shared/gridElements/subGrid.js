import React from "react";
const Settings = require('Settings');
import GridModal from "./gridModal.js";
import GardenStore from '../../../stores/GardenStore';
import PlantStore from '../../../stores/PlantStore';
import '../../../../sass/components/shared/subGrid.sass'


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
      showModal: false,
    }
  }
  componentWillMount() {
    GardenStore.on("plants_plots_loaded", this.refreshGarden);
    GardenStore.on("plot_plant_added", this.refreshGarden);
  }

  componentWillUnmount() {
    GardenStore.removeListener("plants_plots_loaded", this.refreshGarden);
    GardenStore.removeListener("plot_plant_added", this.refreshGarden);
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
        <image href={Settings.assetServer + this.state.plant.plant_icon} x={xVal} y={yVal} width={100/area} height={100/area}/>
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
    if (this.state.plant.area) {
      let area = this.state.plant.area;
      let columnArr = [];
      for (var i = 0; i < area; i++) {
        columnArr.push(this.generateColumn(area, this.props.xVal + (100/area)*i));
      }
      return columnArr;
    } else {
      return (
        <image class="shovel-image" href={Settings.assetServer + "shovel.svg"}  x={this.props.xVal+10} y={this.props.yVal+10} width="50px" height="50px"/>
      )
    }
  }

  render() {
    return (
      <g class="subgrid-wrap"  onClick={this.openModal.bind(this)}>
        {this.generateGrid()}
        <GridModal showModal={this.state.showModal}
          close={this.closeModal}
          plant={this.state.plant}
          plot={this.state.plot}
          bed_id={this.state.bed_id}
          plot_id={this.state.plot_id}
          />
      </g>
    )
  }
}
