
const reducer = (state: any = { talkIds: [] }, action) => {
    switch (action.type) {
        case 'schedule/add':
            return {
                ...state,
                talkIds: [...state.talkIds, action.payload.talkId]
            }

        default:
            return state
    }
}

const addToSchedule = (talkId) => ({
    type: 'schedule/add',
    payload: { talkId }
})


class Store {
    reducer: (state, action) => any
    state: any = {}

    constructor(reducer) {
        this.reducer = reducer
    }

    dispatch(action) {
        this.state = this.reducer(this.state, action)
    }

    getState() {
        return this.state
    }
}

const store = new Store(reducer)

store.dispatch(addToSchedule('1'))
console.log(store.getState())