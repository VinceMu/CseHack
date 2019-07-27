import React, { Component } from 'react';
import '../App/App.css';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import {withRouter} from "react-router-dom";
const config = {
  headers: {'Access-Control-Allow-Origin': '*'}
};

const Print = (props) => (
    <p>
        {props.message} 
        {/* access message property of props */}
    </p>
)

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      location: '',
      topic: ''
    }
  }

  handleSearchLoc (e) {
    this.setState({ location: e.target.value})
  }

  handleSearchTop (e) {
    this.setState({ topic: e.target.value})
  }

  handleGoClick =()=> {
    axios.post('http://127.0.0.1:5000/search', {
        location: this.state.location,
        topic: this.state.topic
      },config)
      .then( (response) =>{
        console.log(response);
        const payload = response.data; 
        this.props.history.push({
          pathname:"/result",
          state:payload
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render () {
    return (
        <div className='searchbar-container'>
            <Print message="Search Anything"/>
            <form method="POST" className='Search-Bar' onSubmit={e => e.preventDefault()}>
            <input
                type='text'
                size='60'
                fontSize='50px'
                placeholder='Enter Location'
                onChange={this.handleSearchLoc.bind(this)}
                value={this.state.location} />
                <br />
            <input
                type='text'
                size='60'
                placeholder='Enter Topic'
                onChange={this.handleSearchTop.bind(this)}
                value={this.state.topic} />
                <br />
            <Button
                type='primary'
                color='white'
                size='large'
                onClick={this.handleGoClick}>
                Search
            </Button>
            </form>
            {/* <Print message={"Searching location: " + this.state.location}/> */}
            {/* <Print message={"Searching topic: " + this.state.topic}/> */}
        </div>
    )
  }
}

export default withRouter(SearchBar)