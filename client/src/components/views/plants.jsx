import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TransitionGroup } from 'react-transition-group'
import { map } from 'lodash'
// scripts
import { getPlants, setNotice } from './../../scripts/actions'
import * as d from './../../scripts/dates'
// components
import Fade from './../animations/fade'
import Section from './../partials/section'

class Plants extends Component {
  componentDidMount () {
    const { getPlants } = this.props
    getPlants()
  }

  componentWillReceiveProps (nextProps) {
    const { setNotice } = this.props
    const { plants } = nextProps
    const count = plants.filter((p) => d.passed(p.nextWater)).length
    setNotice(count)
  }

  sortPlants () {
    const { plants } = this.props
    const sortedPlants = {}
    const thirsty = plants.filter(p => d.passed(p.nextWater))
    const all = plants.filter(p => !d.passed(p.nextWater))

    if (thirsty.length > 0) sortedPlants.thirsty = thirsty
    if (all.length > 0) sortedPlants.all = all

    if (all.length > 0) {
      console.log('plant next water', thirsty[0].nextWater)
      console.log('overdue date method?', d.overdue(thirsty[0].nextWater)) 
    }
    
    return sortedPlants
  }

  render () {
    const plants = this.sortPlants()
    
    return (
      <TransitionGroup>
        { map(plants, (p, t) => (
          <Fade appear key={t}>
            <Section plants={p} title={t} />
          </Fade>
        )) }
      </TransitionGroup>
    )
  }
}

export default connect(({ plants }) => ({ plants }), { getPlants, setNotice })(Plants)
