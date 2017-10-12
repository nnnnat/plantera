import React from 'react'
import { Header } from './Header'
import { List } from './List'
// scripts
import { bogus } from '../scripts/utils'

const plants = bogus()

export const App = () => {
  return (
    <div>
      <Header />
      <List plants={ plants } />
    </div>
  )
}
