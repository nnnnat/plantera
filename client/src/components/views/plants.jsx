import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TransitionGroup } from 'react-transition-group'
import { map } from 'lodash'
// scripts
import { getPlants, setNotice } from './../../scripts/actions'
import { passed } from './../../scripts/dates'
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
    const count = plants.filter((p) => passed(p.nextWater)).length
    setNotice(count)
  }

  sort () {
    const { plants } = this.props
    return (plants.length) ? plants.reduce((res, p, i) => {
      (passed(p.nextWater)) ? res['thirsty'].push(p) : res['all'].push(p)
      return res
    }, { thirsty: [], all: [] }) : {}
  }

  render () {
    const plants = this.sort()
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
