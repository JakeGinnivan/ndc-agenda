// @flow
import React from 'react'
import { connect } from 'react-redux'
import { addToSchedule } from '../../../app.redux'

const AddToSchedule = (props) => (
    <button
        onClick={props.addToSchedule}
    >
        Add to schedule
    </button>
)

const RemoveFromSchedule = ({ removeFromSchedule} ) => (
    <button
        onClick={removeFromSchedule}
    >
        Remove from schedule
    </button>
)

export const TalkRaw = ({ startTime, title, link, dispatch, schedule }) => {
    const scheduleButton = schedule.indexOf(link) === -1
        ? <AddToSchedule addToSchedule={() => dispatch(addToSchedule(link))} />
        : <RemoveFromSchedule removeFromSchedule={() => {}} />
    return (
        <div>
            {startTime.hour}:{startTime.minutes} {title}
            {scheduleButton}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { schedule: state.schedule }
}
export const Talk = connect(mapStateToProps)(TalkRaw)