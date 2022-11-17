import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Components/About/About'
import Blog from './Components/Blogs/Blog'
import Blogs from './Components/Blogs/Blogs'
import Contact from './Components/Contact/Contact'
import Error from './Components/Error/Error'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs/:title" element={<Blog />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App
