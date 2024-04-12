/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class PieChart extends Component {
	render() {
		const options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "Fertilizers Purchased"
			},
			data: [{
				type: "pie",
				startAngle: 50,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 14,
				indexLabel: "{label} - {y}%",
				dataPoints: [
					{ y: 18, label: "Urea" },
					{ y: 49, label: "Potassium" },
					{ y: 9, label: "Manure" },
					{ y: 5, label: "Ammonium Sulphate" },
					{ y: 19, label: "Single Super Phosphate" }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default PieChart;           