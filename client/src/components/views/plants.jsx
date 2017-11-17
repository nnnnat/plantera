import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
// scripts
import { getPlants, setNotice } from './../../scripts/actions'
import { Dates } from './../../scripts/utils'
// components
import SectionTitle from './../blocks/sectionTitle'
import List from './../partials/list'

const d = new Dates()

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
    const sort = _.reduce(plants, (res, val) => {
      (d.passed(val.nextWater))
        ? (res['thirsty'] || (res['thirsty'] = [])).push(val)
        : (res['all'] || (res['all'] = [])).push(val)
      return res
    }, {})
    return Object.keys(sort).sort().reduce((res, key) => {
      res[key] = sort[key]
      return res
    }, {})
  }

  renderList (plants, title) {
    return (
      <div key={title}>
        <SectionTitle title={`${title} Plants`} />
        <List plants={plants} thirsty={(title === 'thirsty')} />
      </div>
    )
  }

  render () {
    const plants = this.sortPlants()
    const isThirsty = (plants.thirsty)
    const bdrColor = (isThirsty) ? 'bdr--alert' : 'bdr--gray1'

    return (
      <section className={`plants bdr--t ${bdrColor} bg--white`}>
        { _.reverse(_.map(plants, (p, t) => this.renderList(p, t))) }
      </section>
    )
  }
}

const mapStateToProps = (state) => ({ plants: state.plants })

export default connect(mapStateToProps, { getPlants, setNotice })(Plants)
