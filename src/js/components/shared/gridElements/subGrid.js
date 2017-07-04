import React from "react";

export default class TwyByTwo extends React.Component {
  constructor(props) {
    super(props);

    this.plants = [
      {
        name: "broccoli",
        image: "https://s3-us-west-2.amazonaws.com/uproot/broccoli.svg",
        area: 1
      },
      {
        name: "corn",
        image: "https://s3-us-west-2.amazonaws.com/uproot/corn.svg",
        area: 1
      },
      {
        name: "peas",
        image: "https://s3-us-west-2.amazonaws.com/uproot/peas.svg",
        area: 3
      },
      {
        name: "tomato",
        image: "https://s3-us-west-2.amazonaws.com/uproot/tomato.svg",
        area: 1
      },
      {
        name: "lettuce",
        image: "https://s3-us-west-2.amazonaws.com/uproot/lettuce.svg",
        area: 2
      }
    ]

    this.state = {
      plant: this.getRandomPlant()
    }
  }

  getRandomPlant() {
    return this.plants[Math.floor(Math.random() * this.plants.length)];
  }

  generateRow(xVal, yVal) {
    return (
      <g>
        <rect class="subcell" x={xVal+this.props.xVal} y={yVal+this.props.yVal} width={100/this.props.dimension} height={100/this.props.dimension} rx="8" ry="8"/>
        <image href={this.state.plant.image} x={xVal+this.props.xVal} y={yVal+this.props.yVal} width={100/this.props.dimension} height={100/this.props.dimension}/>
      </g>
    )
  }

  generateColumn(rowNum, xVal) {
    let rowArr = [];
    for (var i = 0; i < rowNum; i++) {
      rowArr.push(this.generateRow(xVal, i*(100/this.props.dimension)));
    }
    return rowArr
  }

  generateGrid(rowNum, columnNum) {

    let columnArr = [];
    for (var i = 0; i < columnNum; i++) {
      columnArr.push(this.generateColumn(rowNum, i*(100/this.props.dimension)));
    }
    return columnArr;
  }

  render() {
    return (
      <g>
        {this.generateGrid(this.state.plant.area, this.state.plant.area)}
      </g>
    )
  }
}
