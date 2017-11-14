import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// scripts
import { deletePlant } from './../../../scripts/actions'

class DeleteBtn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pending: false
    }
  }

  clicked (e, id) {
    e.preventDefault()
    const { pending } = this.state
    const { deletePlant, history } = this.props
    if (pending) {
      deletePlant(id, () => history.push('/'))
    } else {
      this.setState({ pending: !pending })
    }
  }

  render () {
    const { pending } = this.state
    const { id } = this.props
    const btnClass = (pending) ? 'btn--alt btn--error' : 'btn--clear'
    return (
      <button className={btnClass} onClick={(e) => this.clicked(e, id)}>
        { (pending) ? 'Confirm Delete' : 'Delete' }
      </button>
    )
  }
}

export default withRouter(connect(null, { deletePlant })(DeleteBtn))
