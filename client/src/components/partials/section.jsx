import React from 'react'
import { TransitionGroup } from 'react-transition-group'
// components
import Slide from './../animations/slide'
import SectionTitle from './../blocks/sectionTitle'
import Plant from './../blocks/plant'

export default ({ plants, title }) => (
  <section className={`plants bg--white`}>
    <SectionTitle title={`${title} Plants`} />
    <TransitionGroup>
      { plants.map((p, i) => (
        <Slide appear key={p._id} delay={i}>
          <Plant plant={p} thirsty={(title === 'thirsty')} />
        </Slide>
      )) }
    </TransitionGroup>
  </section>
)
