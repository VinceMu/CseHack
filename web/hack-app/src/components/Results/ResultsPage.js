import React, { Component } from 'react';
import '../App/App.css';
import Button from '@material-ui/core/Button';
//import the desired component from the Chart.js library
import { Bar, Line, Doughnut, Radar } from "react-chartjs-2"
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

var Chart = require("chart.js");
const Print = (props) => (
    <p>
        {props.message} 
        {/* access message property of props */}
    </p>
)

// var CanvasJSReact = require('../../../src/canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default class ResultsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            charData: {
                labels:[],
                //labels: ['Germany', 'Spain', 'Mexico'],
                datasets: [
                    {
                        // label: "Sentiment",
                        // data: ['0.2973507046699524','0.8444602489471436','0.9474703073501587']
                        label:[],
                        backgroundColor:[
                            //'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1,
                        data:[]
                    }
                ],
            }
        }
    }

    render() {
        Chart.scaleService.updateScaleDefaults('linear', {
            ticks: {
                min: 0
            }
        });
        var data = {
            "entity": {
                "Germany": {
                    "avg_sentiment": 0.2973507046699524,
                    "frequency": 1
                },
                "Mexico\\u2013United States barrier": {
                    "avg_sentiment": 0.8444602489471436,
                    "frequency": 1
                },
                "Spain": {
                    "avg_sentiment": 0.9474703073501587,
                    "frequency": 1
                }
            },
            "key_phrases": {
                "Germany": {
                    "avg_sentiment": 0.2973507046699524,
                    "frequency": 1
                },
                "Mexican border wall": {
                    "avg_sentiment": 0.8444602489471436,
                    "frequency": 1
                },
                "Spain": {
                    "avg_sentiment": 0.9474703073501587,
                    "frequency": 1
                },
                "fun holiday": {
                    "avg_sentiment": 0.9474703073501587,
                    "frequency": 1
                }
            }
        }

        if (data.entity) {
            for (let ent in data.entity) {
                if (ent) {
                    this.state.charData.labels.push(ent);//setstate
                    this.state.charData.datasets[0].data.push(data.entity[ent].avg_sentiment);
                    //this.state.charData.datasets[0].backGroundColour.push(col_generator.nextColour());
                }
            }
            for (let ent in data.key_phrases) {
                if (ent) {
                    this.state.charData.labels.push(ent);
                    this.state.charData.datasets[0].data.push(data.key_phrases[ent].avg_sentiment);
                    //this.state.charData.datasets[0].backGroundColour.push(col_generator.nextColour());
                }
            }
        }

        return (
            <div>
                
            <Print message="Findings"/>
            <Grid container spacing={3}>
                <Grid container justify="center" item xs={6}>
                
                    <Bar
                        data={this.state.charData}
                        //options = {this.state.dataSet}
                        width={800}
                        height={400}
                        options={{ maintainAspectRatio: true }}
                        //background = '#fff'
                    />
                
                </Grid>
                <Grid container justify="center" item xs={6}>

                    <Line
                        data={this.state.charData}
                        //options = {this.state.dataSet}
                        width={800}
                        height={400}
                        options={{ maintainAspectRatio: true }}
                        //background = '#fff'
                    />
                
                </Grid>
                <Grid container justify="center" item xs={6}>
                    <Doughnut
                        data={this.state.charData}
                        //options = {this.state.dataSet}
                        width={800}
                        height={400}
                        options={{ maintainAspectRatio: true }}
                        //background = '#fff'
                    />
                </Grid>
                <Grid container justify="center" item xs={6}>
                    <Radar
                        data={this.state.charData}
                        //options = {this.state.dataSet}
                        width={800}
                        height={400}
                        options={{ maintainAspectRatio: true }}
                        //background = '#fff'
                    />
                </Grid>
                
            </Grid>
            </div>




        )


    }

}