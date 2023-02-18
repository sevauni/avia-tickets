import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import { ChakraProvider } from '@chakra-ui/react'


import { extendTheme } from "@chakra-ui/react"


const theme = extendTheme({
  "colors": {
    "brand": {
      "50": "#0089FF",
      "100": "#0089FF",
      "200": "#939CF6",
      "300": "#6976F2",
      "400": "#3F4FEE",
      "500": "#0089FF",
      "600": "#112A46",
      "700": "#112A46",
      "800": "#112A46",
      "900": "#112A46"
    },
    "brandSecond": {
      "50": "#0089FF",
      "100": "#0089FF",
      "200": "#939CF6",
      "300": "#6976F2",
      "400": "#3F4FEE",
      "500": "#0067FF",
      "600": "#112A46",
      "700": "#112A46",
      "800": "#112A46",
      "900": "#112A46"
    }
  }
}
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
