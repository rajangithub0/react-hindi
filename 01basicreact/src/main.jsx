import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
  return (
    <div>
      <h1>Rajan working in main jsx</h1>
    </div>
  )
}

const anotherElement = (
  <a href='https://google.com' target='_blank'>visit google</a>
)

const anotherUser = "Rajan "


const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com', target: "_blank"
  },
  'click me to google',
  anotherUser
)
createRoot(document.getElementById('root')).render(
  // <MyApp />,
  // //MyApp()
  // anotherElement
  reactElement
  // <App />
)
