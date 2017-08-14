import React from 'react'
import { Talk } from './talk'

export const Slot = ({ time, talks }) => {
    const talkList = talks
    .map(talk => (
      <Talk
        key={talk.title+talk.startTime.hour+talk.startTime.minutes}
        {...talk}
      />
    ))
  
    return (
      <div>
          <div>{time}</div>
          {talkList}
        </div>
    )
  }
  