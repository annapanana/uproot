import React from "react";
import SubGrid from './subGrid.js';
import PlantStore from '../../../stores/PlantStore';
import GardenStore from '../../../stores/GardenStore';

export default class Bed extends React.Component {
  constructor(props) {
    super(props);
    this.refreshBed = this.refreshBed.bind(this);
    this.serviceStart = this.serviceStart.bind(this);
    this.serviceError = this.serviceError.bind(this);
    this.state = {
      plants: this.props.plants,
      plots_plants: [],
      isLoading: true
    }
  }

  componentWillMount() {
    GardenStore.on("plot_plant_service_start", this.serviceStart)
    GardenStore.on("plot_serice_error", this.serviceError)
    GardenStore.on("plants_plots_loaded", this.refreshBed);
    GardenStore.on("plot_plant_added", this.refreshBed);
  }

  componentWillUnmount() {
    GardenStore.removeListener("plot_plant_service_start", this.serviceStart);
    GardenStore.removeListener("plot_serice_error", this.serviceError);
    GardenStore.removeListener("plants_plots_loaded", this.refreshBed);
    GardenStore.removeListener("plot_plant_added", this.refreshBed);
  }

  serviceStart() {
    this.setState({isLoading: true})
  }

  serviceError() {
    this.setState({serviceError: "error", isLoading: false})
  }

  refreshBed() {
    this.setState({
      plots_plants: GardenStore.getAllPlots(),
      isLoading: false
    })
  }

  generateRow(xVal, yVal, plotVal) {
    let plot_id = `${this.props.bed_id}_${plotVal}`;
    let singlePlot = this.getSinglePlot(this.props.bed_id, plotVal);
    return (
      <g id={plot_id}>
        <rect class="cell" x={xVal+this.props.xVal+5} y={yVal+this.props.yVal+5} width="100" height="100"/>
        <SubGrid
          xVal={xVal+this.props.xVal+5}
          yVal={yVal+this.props.yVal+5}
          bed_id={this.props.bed_id}
          plot_id={plotVal}
          openModal={this.props.openModal}
          singlePlot={singlePlot}
          />
      </g>
    )
  }

  getSinglePlot(bed_id, plot_id) {
    return this.state.plots_plants.find((plot) => {
      return plot.bed_id === bed_id && plot.plot_bed_id === plot_id
    })
  }

  generateColumn(rowNum, xVal, column_id) {
    let rowArr = [];
    for (var i = 0; i < rowNum; i++) {
      rowArr.push(this.generateRow(xVal, i*100, `${column_id}_${i}`));
    }
    return rowArr
  }

  generateGrid(rowNum, columnNum) {
    let columnArr = [];
    for (var i = 0; i < columnNum; i++) {
      columnArr.push(this.generateColumn(rowNum, i*100, i));
    }
    return columnArr;
  }

  render() {
    const {rows, columns} = this.props;
    return (
      <g class="bed">
        {
          !this.state.isLoading &&
            this.generateGrid(rows, columns)
        }
      </g>
    )
  }
}
