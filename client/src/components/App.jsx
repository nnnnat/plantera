import React from 'react'
import { Header } from './Header'
import { List } from './List'

const plants = [
  {'name': 'kim'},
  {'name': 'Charlie'}
]

export const App = () => {
  return (
    <div>
      <Header />
      <List plants={plants} />
    </div>
  )
}
