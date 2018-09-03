const fetch = require('node-fetch');

const encodeDataToURL = (pixabayUrlParams) => {
  const encodedUrlData = Object
    .keys(pixabayUrlParams)
    .map(value => `${value}=${encodeURIComponent(pixabayUrlParams[value])}`)
    .join('&')
  return `${process.env.PIXABAY_BASE_URL}key=${process.env.PIXABAY_API_KEY}&${encodedUrlData}`
}

const devServerConfig = port => ({
  host: 'localhost',
  port,
  historyApiFallback: true,
  open: true,
  hot: true,
  before(app) {
    app.get('/getData', (req, res) => {
      // console.log('getData', req.query)
      const pixabayImagesUrl = encodeDataToURL(req.query)
      // console.log('pixabayImagesUrl', pixabayImagesUrl)
      fetch(pixabayImagesUrl).then((pixabayApiresponse) => {
        if (pixabayApiresponse.status !== 200) {
          // console.log('Looks like a problem. Status Code: ', pixabayApiresponse.status);
          res.err = { message: 'Look like there\'s an error of some type' }
        }
        pixabayApiresponse.json().then(data => res.json(data))
      })
        .catch((err) => {
          console.log('Fetch Error :-S', err)
        })
    })
  },
})


exports.devServerConfig = devServerConfig
