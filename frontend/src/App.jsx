import React  from 'react'
import Navbar from './components/Navbar/Navbar'
import BooksMenu from './components/BooksMenu/BooksMenu'

function App() {

  return (
    <div className="overflow-x-hidden">
        <Navbar/>
        <BooksMenu/>
    </div>
  )
}

export default App
