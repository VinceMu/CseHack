import React, { Component } from 'react';
import '../App/App.css';
import Button from '@material-ui/core/Button';
//import the desired component from the Chart.js library
import { Bar, Line } from "react-chartjs-2"
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
                labels: [],
                dataSet: [],
                backGroundColours: []
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
        {/* //var ctx = document.getElementById('myChart').getContext('2d'); */ }
        var colourGen = function () {
            this.colour = {
                r : 50
                , g : 100
                , b : 150
            }
            this.colourVec = {
                r : 10
                , g : 20
                , b : 10
            }
            this.nextColour = function() {
                for (let col in this.colour) {
                    this.colour[col] += this.colourVec[col];
                }
                return this.formatColour();
            }

            this.formatColour = function() {
                return "RGB(" + this.colour.r + "," + this.colour.g + "," + this.colour.b + ")";
            }
        }
        var col_generator = new colourGen();
        if (data.entity) {
            for (let ent in data.entity) {
                if (ent) {
                    this.state.charData.labels.push(ent);//setstate
                    this.state.charData.dataSet.push(data.entity[ent].avg_sentiment);
                    this.state.charData.backGroundColours.push(col_generator.nextColour());
                }
            }
            for (let ent in data.key_phrases) {
                if (ent) {
                    this.state.charData.labels.push(ent);
                    this.state.charData.dataSet.push(data.key_phrases[ent].avg_sentiment);
                    this.state.charData.backGroundColours.push(col_generator.nextColour());
                }
            }
        }
        return (
            <div>
                
            <Print message="Findings"/>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                
                    <Bar
                        data={this.state.charData}
                        //options = {this.state.dataSet}
                        width={800}
                        height={400}
                        options={{ maintainAspectRatio: false }}
                        //background = '#fff'
                    />
                
                </Grid>
                <Grid item xs={6}>

                    <Line
                        data={this.state.charData}
                        //options = {this.state.dataSet}
                        width={800}
                        height={400}
                        options={{ maintainAspectRatio: false }}
                        //background = '#fff'
                    />
                
                </Grid>
                <Grid text-align="center" item xs={10}>
                </Grid>
                <img class="image" src={require('./pie.png')} />
            </Grid>
            </div>




        )


    }

}