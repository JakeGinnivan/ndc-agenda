import { fetchAgenda } from './agenda'

const ADD_TO_SCHEDULE = 'schedule/add'
const REMOVE_FROM_SCHEDULE = 'schedule/remove'
const LOAD_TALKS = 'talks/load'
const LOAD_TALKS_COMPLETE = 'talks/loaded'

const defaultState = { schedule: [] }
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_TO_SCHEDULE:
            return {
                ...state,
                schedule: [...state.schedule, action.payload]
            }
        case REMOVE_FROM_SCHEDULE:
            return {
                ...state,
                schedule: state.schedule.filter(s => s !== action.payload)
            }
        case LOAD_TALKS:
            return {
                ...state,
                loading: true
            }
        case LOAD_TALKS_COMPLETE:
            return {
                ...state,
                loading: false,
                talks: action.payload
            }
    }
    return state
}

export const addToSchedule = (id) => {
    return {
        type: ADD_TO_SCHEDULE,
        payload: id
    }
}

export const loadTalks = () => async (dispatch) => {
    dispatch({ type: LOAD_TALKS })

    const talks = await fetchAgenda()

    dispatch({ type: LOAD_TALKS_COMPLETE, payload: talks })
}
