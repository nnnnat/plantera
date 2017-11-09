import React, { Component } from 'react'
import { connect } from 'react-redux'
// scripts
import { getPlants } from './../../scripts/actions'
// components
import List from './../blocks/list'

class Plants extends Component {
  componentWillMount () {
    this.props.getPlants()
  }
  
  render () {
    const { plants } = this.props
    return (
      <div>
        <div className='bg--gray1 pd0--y'>
          <div className='cn2'>
            <h2 className='h5 tx--reset tx--primary tx--uppercase'>
              All Plants
            </h2>
          </div>
        </div>
        <List plants={ plants }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ plants: state.plants })

export default connect(mapStateToProps, { getPlants })(Plants)
