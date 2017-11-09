import React, { Component } from 'react'
import { connect } from 'react-redux'
// scripts
import { getPlants } from './../../scripts/actions'
// components
import Title from './../elements/title'
import List from './../blocks/list'

class Plants extends Component {
  componentWillMount () {
    this.props.getPlants()
  }
  
  render () {
    const { plants } = this.props
    return (
      <section className='plants'>
        <Title title='All Plants' bg='bg--gray0' />
        <List plants={ plants }/>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({ plants: state.plants })

export default connect(mapStateToProps, { getPlants })(Plants)
