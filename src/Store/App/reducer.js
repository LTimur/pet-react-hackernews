import { actionTypes} from './actions'

const getInitialState = () => ({
    b: 'asdasdsadsad';
})

export const app = (state = getInitialState(), { type, payload }) => {
    switch(type) {
        case actionTypes.x:
            return {
                ...state,
                ...payload,  //{ b: <VALUE>}
            }
        default:
            return state
    }
}