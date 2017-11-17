import React from 'react'
import _ from 'lodash'
// components
import SectionTitle from './../blocks/sectionTitle'
import Plant from './../blocks/plant'

const Section = ({ plants, title }) => {
  const thirsty = (title === 'thirsty')
  const bdrColor = (thirsty) ? 'bdr--alert' : 'bdr--gray1'

  return (
    <section className={`plants bdr--t ${bdrColor} bg--white`}>
      <SectionTitle title={`${title} Plants`} />
      { _.map(plants, (p, k) => <Plant key={k} plant={p} thirsty={thirsty} />) }
    </section>
  )
}

export default Section
