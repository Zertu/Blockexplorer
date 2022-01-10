import axios from 'axios'
axios.defaults.baseURL = 'https://blockchain.info/'
const errorHandler = (err) => {
  console.log(err)
  if (err.response) {
    window.$message.error(err.response.data.message)
    return new Error(err.response.status)
  } else {
    window.$message.error('something went wrong')
    return new Error('unknwon error')
  }
}
export function get (url, parms) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, parms)
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data)
        } else {
          reject(errorHandler(res))
        }
      })
      .catch((e) => reject(errorHandler(e)))
  })
}
