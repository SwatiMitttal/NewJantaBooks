import './index.css'
import appStore from './store/appStore.js'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<GoogleOAuthProvider
  clientId='373613249976-9bdfj72fgfri91iersqc30or6osu6h0k.apps.googleusercontent.com'
>
  <Provider  store={appStore}>
    <App />
  </Provider>
  </GoogleOAuthProvider>
)

//No 'Access-Control-Allow-Origin' header is present on the requested resource.
