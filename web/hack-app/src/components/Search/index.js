import React, { Component } from 'react';
import '../App/App.css';

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

  handleGoClick () {
    // send the post request!!!!
    // test by printing

  }

  render () {
    return (
        <div className='searchbar-container'>
            <Print message="Search Anything"/>
            <form className='Search-Bar' onSubmit={e => e.preventDefault()}>
            <input
                type='text'
                size='60'
                font-size='50px'
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
            <button
                type='submit'
                onClick={this.handleGoClick.bind(this)}>
                Search
            </button>
            </form>
            <Print message={"Searching location: " + this.state.location}/>
            <Print message={"Searching topic: " + this.state.topic}/>
        </div>
    )
  }
}

export default SearchBar