import axios from 'axios'
/* 查询 */
export function findDemo () {
  const url = '/api/demo.json'

  const data = {}
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch(function (response) {
    console.log(response)
  })
}
