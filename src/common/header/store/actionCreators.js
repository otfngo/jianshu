import { fromJS } from 'immutable'
import axios from 'axios'
import { input_change, search_focus, search_blur, change_list, mouse_enter, mouse_leave, change_page } from './actionTypes'

export const inputChange = (value) => ({
  type: input_change,
  value
})

export const searchFocus = () => ({
  type: search_focus
})

export const searchBlur = () => ({
  type: search_blur
})

const changeList = data => ({
  type: change_list,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const getHeaderList = () => {
  return dispatch => {
    axios.get('/api/headerList.json').then(res => {
      const { data } = res
      dispatch(changeList(data.data))
    }).catch(err => {
      console.log(err)
    })
  }
}

export const mouseEnter = () => ({
  type: mouse_enter
})

export const mouseLeave = () => ({
  type: mouse_leave
})

export const changePage = (page) => ({
  type: change_page,
  page
})