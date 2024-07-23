import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './utils/scrollTop.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <ScrollToTop />

        <App />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
)
