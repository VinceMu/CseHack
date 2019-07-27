import React, { Component } from 'react';
import '../App/App.css';

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
    // if (!this.props.github.isFetchingUser) {
    //   this.props.actions.fetchUser(this.state)
    // }
  }

  render () {
    return (
      <div className='searchbar-container'>
        <form className='Search-Bar' onSubmit={e => e.preventDefault()}>
          <input
            type='text'
            size='45'
            placeholder='Enter Location'
            onChange={this.handleSearchLoc.bind(this)}
            value={this.state.location} />
          <button
            type='submit'
            onClick={this.handleGoClick.bind(this)}>
            Search
          </button>
        </form>
        <form onSubmit={e => e.preventDefault()}>
          <input
            type='text'
            size='45'
            placeholder='Enter Topic'
            onChange={this.handleSearchTop.bind(this)}
            value={this.state.topic} />
          <button
            type='submit'
            onClick={this.handleGoClick.bind(this)}>
            Search
          </button>
        </form>
      </div>
    )
  }
}

export default SearchBar