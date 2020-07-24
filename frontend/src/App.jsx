import React from 'react'
import GlobalStyle from "./style/global"
import { BrowserRouter as Router } from "react-router-dom"

import Routes from "./routes/index"
import Header from "./components/Header"
import { ToastContainer } from "react-toastify"

function App () {

  return (
    <Router>
      <Header />
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={ 3000 } limit={ 2 } />
    </Router>
  );
}

export default App
