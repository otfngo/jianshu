import { fromJS } from 'immutable'
import { input_change, search_focus, search_blur, change_list, mouse_enter, mouse_leave, change_page } from './actionTypes'

const initState = fromJS({
  searchValue: '',
  isFocused: false,
  isMouseEnter: false,
  list: [],
  page: 0,
  totalPage: 0
})

const reducers = new Map([
  [input_change, (state, { value }) => {
    return state.set('searchValue', value)
  }],
  [search_focus, state => {
    return state.set('isFocused', true)
  }],
  [search_blur, state => {
    return state.set('isFocused', false)
  }],
  [change_list, (state, { data, totalPage }) => {
    return state.merge({
      list: data,
      totalPage
    })
  }],
  [mouse_enter, state => {
    return state.set('isMouseEnter', true)
  }],
  [mouse_leave, state => {
    return state.set('isMouseEnter', false)
  }],
  [change_page, (state, { page }) => {
    return state.set('page', page)
  }],
])

export default (state = initState, action) => {
  const reducer = reducers.get(action.type)
  if (reducer) {
    return reducer(state, action)
  }
  return state
}