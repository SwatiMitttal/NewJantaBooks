import './index.css'
import appStore from './store/appStore.js'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App.js'

createRoot(document.getElementById('root')).render(
  <Provider  store={appStore}>
    <App />
  </Provider>,
)