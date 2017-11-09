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

  renderList (title, plants) {
    return (
      <div>
        <Title title={ title } bg='bg--gray0' />
        <List plants={ plants }/>
      </div>
    )
  }
  
  render () {
    const { plants: { thirsty, fine } } = this.props
    return (
      <section className='plants'>
        { thirsty ? this.renderList('Thirsty Plants', thirsty) : '' }
        { this.renderList('All Plants', fine) }
      </section>
    )
  }
}

const mapStateToProps = (state) => ({ plants: state.plants })

export default connect(mapStateToProps, { getPlants })(Plants)
