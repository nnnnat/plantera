import React, { Component } from 'react'
import { connect } from 'react-redux'
// scripts
import { getPlants } from './../../scripts/actions'
import { Dates } from './../../scripts/utils'
// components
import Title from './../elements/title'
import List from './../blocks/list'

const d = new Dates()

class Plants extends Component {
  componentWillMount () {
    this.props.getPlants()
  }

  finePlants (plants) {
    return _.mapKeys(_.filter(plants, (p) => !d.passed(p.nextWater)), '_id') 
  }

  thirstyPlants (plants) {
    return _.mapKeys(_.filter(plants, (p) => d.passed(p.nextWater)), '_id')
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
    const { plants } = this.props
    const thirsty = this.thirstyPlants(plants)
    console.log(thirsty)
    return (
      <section className='plants'>
        { _.size(thirsty) > 0 ? this.renderList('Thirsty Plants', thirsty) : '' }
        { this.renderList('All Plants', this.finePlants(plants)) }
      </section>
    )
  }
}

const mapStateToProps = (state) => ({ plants: state.plants })

export default connect(mapStateToProps, { getPlants })(Plants)
