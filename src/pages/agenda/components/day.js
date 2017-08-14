import React from 'react'
import _ from 'lodash'
import { Slot } from './slot'

export const Day = ({ day, talks }) => {
    const slots = _.groupBy(talks, talk => `${talk.startTime.hour}:${talk.startTime.minutes}`)

    return (
        <div>
        {Object.keys(slots).map(slot => <Slot time={slot} talks={slots[slot]} />)}
        </div>
    )
}