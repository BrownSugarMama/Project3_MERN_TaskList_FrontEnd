import { render } from 'react-dom'
import { URLProvider } from 'react-url'

import App from './components/App/App.js'

const url = {
  profile: '/profile/:username/'
}

render(
  <URLProvider urls={urls}>
    <App />
  </URLProvider>,
  document.body
)

export default Url
