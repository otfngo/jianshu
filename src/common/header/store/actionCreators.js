import { fromJS } from 'immutable'
import axios from 'axios'
import { search_focus, search_blur, change_list } from './actionTypes'

export const getSearchFocusAction = () => ({
  type: search_focus
})

export const getSearchBlurAction = () => ({
  type: search_blur
})

const changeList = data => ({
  type: change_list,
  data: fromJS(data)
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