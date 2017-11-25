import React from 'react';
import {Grid} from 'react-d3-core';
import D3Array from 'd3-array';

// const generalChartData = require('./data/user_sample.json');
// const generalChartData = new Array(2).fill(1).map((item, i) => ({x: i*20, y: i*20}));
const generalChartData = [{x: 0, y: 0},{x: 10, y: 10}];

console.warn(`generalChartData`, generalChartData);
const width = 400;
const height = 400;
const margins = {top: 0, right: 0, bottom: 1, left: 1};
const gridAxisClassName = "test-grid-class";
const x = d => (d.x);
const xDomain = D3Array.extent(generalChartData, x);
const xRange = [0, width - margins.left - margins.right];
const xScale = 'linear';
const y = d => (d.y);
const yDomain = D3Array.extent(generalChartData, y);
const yRange = [height - margins.top - margins.bottom, 0];
const yScale = 'linear';

export class GridComponent extends React.Component {
    render() {
        return (
            <svg width={width} height={height}>
                <Grid
                    width={width}
                    height={height}
                    margins={margins}
                    type={'x'}
                    gridAxisClassName={gridAxisClassName}
                    x={x}
                    xDomain={xDomain}
                    xRange={xRange}
                    xScale={xScale}
                    y={y}
                    yDomain={yDomain}
                    yRange={yRange}
                    yScale={yScale}
                />
                <Grid
                    width={width}
                    height={height}
                    margins={margins}
                    type={'y'}
                    gridAxisClassName={gridAxisClassName}
                    x={x}
                    xDomain={xDomain}
                    xRange={xRange}
                    xScale={xScale}
                    y={y}
                    yDomain={yDomain}
                    yRange={yRange}
                    yScale={yScale}
                />
            </svg>
        )
    }
}