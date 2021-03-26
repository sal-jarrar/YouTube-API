import React, { Component } from 'react'

class SearchBar extends Component {
  state = { term: '' }
  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.onTermSubmit(this.state.term)
  }
  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label htmlFor=''>Video Search</label>
            <input
              type='text'
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
