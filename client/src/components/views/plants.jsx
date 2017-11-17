import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
// scripts
import { getPlants, setNotice } from './../../scripts/actions'
import * as d from './../../scripts/dates'
// components
import Section from './../partials/section'

class Plants extends Component {
  componentDidMount () {
    const { getPlants } = this.props
    getPlants()
  }

  componentWillReceiveProps (nextProps) {
    const { setNotice } = this.props
    const { plants } = nextProps
    const count = _.size(_.filter(plants, (p) => d.passed(p.nextWater)))
    setNotice(count)
  }

  sortPlants () {
    const { plants } = this.props
    const sort = _.reduce(plants, (r, v) => {
      (d.passed(v.nextWater))
        ? (r['thirsty'] || (r['thirsty'] = [])).push(v)
        : (r['all'] || (r['all'] = [])).push(v)
      return r
    }, {})

    return Object.keys(sort).sort().reduce((r, k) => {
      r[k] = sort[k]
      return r
    }, {})
  }

  render () {
    const plants = this.sortPlants()
    return _.reverse(_.map(plants, (p, t) => <Section key={t} plants={p} title={t} />))
  }
}

const mapStateToProps = (state) => ({ plants: state.plants })

export default connect(mapStateToProps, { getPlants, setNotice })(Plants)
