import React from "react";
const Settings = require('Settings');
import GardenStore from '../../../stores/GardenStore';
import PlantStore from '../../../stores/PlantStore';
import '../../../../sass/components/shared/subGrid.sass'


export default class SubGrid extends React.Component {
  constructor(props) {
    super(props);
    this.refreshGarden = this.refreshGarden.bind(this);

    this.state = {
      plot: {},
      plant: {},
      bed_id: this.props.bed_id,
      plot_id: this.props.plot_id
    }
  }

  componentWillMount() {
    GardenStore.on("plants_plots_loaded", this.refreshGarden);
    GardenStore.on("plot_plant_added", this.refreshGarden);
    PlantStore.on("plants_loaded", this.refreshGarden);
  }

  componentWillUnmount() {
    GardenStore.removeListener("plants_plots_loaded", this.refreshGarden);
    GardenStore.removeListener("plot_plant_added", this.refreshGarden);
    PlantStore.removeListener("plants_loaded", this.refreshGarden);
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

  generateRow(area, xVal, yVal) {
    return (
      <g>
        <rect class="subcell" x={xVal} y={yVal} width={100/area} height={100/area}/>
        <image href={"./assets/veggies/" + this.state.plant.plant_icon} x={xVal} y={yVal} width={100/area} height={100/area}/>
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
        <image class="shovel-image" href={Settings.assetServer + "shovel.svg"}  x={this.props.xVal+25} y={this.props.yVal+25} width="50px" height="50px"/>
      )
    }
  }

  render() {
    const {openModal} = this.props;
    const modalData = {
      plant: this.state.plant,
      plot: this.state.plot,
      bed_id: this.state.bed_id,
      plot_id: this.state.plot_id
    }
    return (
      <g class="subgrid-wrap"  onClick={openModal.bind(this, modalData)}>
        {this.generateGrid()}
      </g>
    )
  }
}
