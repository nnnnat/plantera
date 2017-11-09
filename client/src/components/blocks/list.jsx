import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
// scripts
import { getPlants } from './../../scripts/actions'
// components
import { Plant } from './plant'

class List extends Component {
  componentWillMount () {
    this.props.getPlants()
  }
  
  render () {
    const { plants } = this.props
    
    return (
      <main>
        <div className='bg--gray1 pd0--y'>
          <div className='cn2'>
            <h2 className='h5 tx--reset tx--primary tx--uppercase'>
              All Plants
            </h2>
          </div>
        </div>
        <section className='cn2'>
          { _.map(plants, plant => <Plant key={ plant._id }  plant={ plant } />) }
      </section>
        </main>
    )
  }
}

const mapStateToProps = (state) => ({ plants: state.plants })

export default connect(mapStateToProps, { getPlants })(List)
