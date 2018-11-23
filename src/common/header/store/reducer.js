import { fromJS } from 'immutable'
import { search_focus, search_blur, change_list } from './actionTypes'

const initState = fromJS({
  focused: false,
  list: []
})

const reducers = new Map([
  [search_focus, state => {
    return state.set('focused', true)
  }],
  [search_blur, state => {
    return state.set('focused', false)
  }],
  [change_list, (state, { data }) => {
    return state.set('list', data)
  }]
])

export default (state = initState, action) => {
  const reducer = reducers.get(action.type)
  if (reducer) {
    return reducer(state, action)
  }
  return state
}