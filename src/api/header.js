import axios from 'axios'

export function fetchHeaderList() {
  return axios.get('/api/headerList.json')
}