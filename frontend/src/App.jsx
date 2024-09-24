import React from "react"
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from "./srcreens/HomeScreen"
import ProductScreen from "./srcreens/ProductScreen"

function App() {


  return (
   <Router>
      <Header/>
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="" Component={HomeScreen}/>
            <Route path="/product/:id" Component={ProductScreen}/>
          </Routes>
        </Container>
      </main>
      <Footer/>
   </Router>
  )
}

export default App
