// @flow
import React from 'react'
import { connect } from 'react-redux'
import { addToSchedule } from '../../../app.redux'

const TalkRaw = ({ startTime, title, link, dispatch, schedule }) => {
    const scheduleButton = schedule.indexOf(link) === -1
        ? (
        <button
            onClick={() => {
                dispatch(addToSchedule(link))
            }}
        >
            Add to schedule
        </button>
        )
        : (
            <button
            onClick={() => {
                // dispatch(removeFromSchedule(link))
            }}
        >
            Remove from schedule
        </button>
        )
    return (
        <div>
            {title}
            {scheduleButton}
        </div>
    )
}

export const Talk = connect(state => ({ schedule: state.schedule }))(TalkRaw)