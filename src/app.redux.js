export const ADD_TO_SCHEDULE = 'schedule/add'

const defaultState = { schedule: [] }
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_TO_SCHEDULE:
            return {
                ...state,
                schedule: [...state.schedule, action.payload]
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