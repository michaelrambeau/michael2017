import ReactGA from 'react-ga'

const options = {
  debug: false
}
ReactGA.initialize('UA-44563970-1', options)

exports.onRouteUpdate = (state, page, pages) => {
  const env = process.env.NODE_ENV
  if (env === 'development') {
    return console.info('No pageview tracking in dev', state.pathname, process.env.NODE_ENV)
  }
  ReactGA.pageview(state.pathname)
}
