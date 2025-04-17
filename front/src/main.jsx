import './index.css'
import appStore from './store/appStore.js'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <Provider  store={appStore}>
    <App />
  </Provider>
)

//No 'Access-Control-Allow-Origin' header is present on the requested resource.
