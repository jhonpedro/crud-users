import React from 'react'
import GlobalStyle from "./style/global"
import { BrowserRouter as Router } from "react-router-dom"

import Routes from "./routes/index"
import Header from "./components/Header"

function App () {

  return (
    <Router>
      <Header />
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App
