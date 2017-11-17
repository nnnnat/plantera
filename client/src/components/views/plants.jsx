import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
// scripts
import { getPlants, setNotice } from './../../scripts/actions'
import { Dates } from './../../scripts/utils'
// components
import PageTitle from './../blocks/pageTitle'
import List from './../partials/list'

const d = new Dates()

class Plants extends Component {
  componentDidMount () {
    this.props.getPlants()
  }

  componentWillReceiveProps (nextProps) {
    const { plants } = nextProps
    this.props.setNotice(_.size(this.thirstyPlants(plants)))
  }

  finePlants (plants) {
    return _.mapKeys(_.filter(plants, (p) => !d.passed(p.nextWater)), '_id')
  }

  thirstyPlants (plants) {
    return _.mapKeys(_.filter(plants, (p) => d.passed(p.nextWater)), '_id')
  }

  renderList (title, plants, type) {
    return (
      <div>
        <PageTitle title={title} />
        <List plants={plants} type={type} />
      </div>
    )
  }

  render () {
    const { plants } = this.props
    const thirsty = this.thirstyPlants(plants)
    const bdrColor = (_.size(thirsty) > 0) ? 'bdr--alert' : 'bdr--gray1'

    return (
      <section className={`plants bdr--t ${bdrColor} bg--white`}>
        { _.size(thirsty) > 0 ? this.renderList('Thirsty Plants', thirsty, 'thirsty') : '' }
        { this.renderList('All Plants', this.finePlants(plants), 'fine') }
      </section>
    )
  }
}

const mapStateToProps = (state) => ({ plants: state.plants })

export default connect(mapStateToProps, { getPlants, setNotice })(Plants)
