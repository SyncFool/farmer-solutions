/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class WithdrawalChart extends Component {
	render() {
		const options = {
			title: {
				text: "Deposit / withdrawal"
			},
			toolTip: {
				shared: true
			},
			legend: {
				verticalAlign: "top"
			},
			axisY: {
				prefix: "₹"
			},
			data: [{
				type: "stackedBar100",
				color: "#5D9C59",
				name: "Deposit",
				showInLegend: true,
				indexLabel: "{y}",
				indexLabelFontColor: "white",
				yValueFormatString: "#,###'₹'",
				dataPoints: [
					{ label: "Jan",   y: 15 },
					{ label: "Feb",   y: 21 },
					{ label: "Mar",   y: 23 },
					{ label: "Apr",   y: 32 },
					{ label: "May",   y: 37 },
					{ label: "Jun",   y: 39 },
					{ label: "Jul",   y: 41 },
					{ label: "Aug",   y: 51 },
					{ label: "Sep",   y: 51 },
					{ label: "Oct",   y: 72 },
                    { label: "Nov",   y: 52 },
                    { label: "Dec",   y: 15 }
				]
			},{
				type: "stackedBar100",
				color: "#DF2E38",
				name: "Withdrawal",
				showInLegend: true,
				indexLabel: "{y}",
				indexLabelFontColor: "white",
				yValueFormatString: "#,###'₹'",
				dataPoints: [
					{ label: "Jan",   y: 15 },
					{ label: "Feb",   y: 21 },
					{ label: "Mar",   y: 23 },
					{ label: "Apr",   y: 32 },
					{ label: "May",   y: 37 },
					{ label: "Jun",   y: 39 },
					{ label: "Jul",   y: 41 },
					{ label: "Aug",   y: 51 },
					{ label: "Sep",   y: 51 },
					{ label: "Oct",   y: 82 },
                    { label: "Nov",   y: 82 },
                    { label: "Dec",   y: 82 }
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
export default WithdrawalChart;          