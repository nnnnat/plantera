import React from 'react'
import { TransitionGroup } from 'react-transition-group'
// components
import Slide from './../animations/slide'
import SectionTitle from './../blocks/sectionTitle'
import Plant from './../blocks/plant'

export default ({ plants, title }) => {
  const thirsty = (title === 'thirsty')
  const bdrColor = (thirsty) ? 'bdr--alert' : 'bdr--gray1'

  return (
    <section className={`plants bdr--t ${bdrColor} bg--white`}>
      <SectionTitle title={`${title} Plants`} />
      <TransitionGroup>
        { plants.map((p, i) => (
          <Slide appear key={p._id} delay={i}>
            <Plant plant={p} thirsty={thirsty} />
          </Slide>
        )) }
      </TransitionGroup>
    </section>
  )
}
