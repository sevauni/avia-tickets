import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import { ChakraProvider } from '@chakra-ui/react'


import { extendTheme } from "@chakra-ui/react"


const theme = extendTheme({
  "colors": {
    "teal": {
      "50": "#E8EAFD",
      "100": "#BEC4F9",
      "200": "#939EF5",
      "300": "#6979F1",
      "400": "#3F53EE",
      "500": "#152DEA",
      "600": "#1124BB",
      "700": "#0D1B8C",
      "800": "#08125E",
      "900": "#04092F"
    }
  }
}
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <ChakraProvider >
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
